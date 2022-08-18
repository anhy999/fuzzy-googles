const Arborist = require('../..')
const { resolve, basename } = require('path')
const { writeFileSync } = require('fs')
const mkdirp = require('mkdirp')
const dir = resolve(__dirname, basename(__filename, '.js'))
const rimraf = require('rimraf')

// these are not arbitrary, the empty/full and no-* bits matter
const folders = [
  resolve(dir, 'empty'),
  resolve(dir, 'empty-no-cache'),
  resolve(dir, 'empty-no-lockfile'),
  resolve(dir, 'empty-no-cache-no-lockfile'),
  resolve(dir, 'full'),
  resolve(dir, 'full-no-lockfile'),
  resolve(dir, 'full-no-cache'),
  resolve(dir, 'full-no-cache-no-lockfile'),
]

const suite = async (suite, { registry, cache }) => {
  // setup two folders, one with a hidden lockfile, one without
  await Promise.all(folders.map(f => mkdirp(f)))

  const dependencies = {
    'flow-parser': '0.114.0',
    'flow-remove-types': '2.114.0',
    ink: '2.6.0',
    tap: '14.10.5',
  }

  let packageLock = null

  const promises = []

  // do it one time so that we have it in the shared cache
  // and benchmark the case where we don't have anything to do
  // this doens't get pushed into promises, because we need it
  // before we do the other ones, so we can write the lockfile.
  {
    const path = resolve(dir, 'full')
    process.stderr.write('reify setup ' + basename(path))
    const arb = new Arborist({
      registry,
      cache,
      path,
    })
    writeFileSync(resolve(arb.path, 'package.json'), JSON.stringify({
      name: basename(path),
      version: '1.0.0',
      dependencies,
    }))
    await arb.reify().then(() => {
      // grab this so we can make setup faster
      packageLock = require(resolve(path, 'package-lock.json'))
    })
  }

  // just reify them all fast.  we'll remove the bits we don't want later.
  for (const path of folders) {
    // already did this one
    if (path === resolve(dir, 'full')) {
      continue
    }
    const arb = new Arborist({
      registry,
      cache,
      path,
    })
    writeFileSync(resolve(path, 'package.json'), JSON.stringify({
      name: basename(path),
      version: '1.0.0',
      dependencies,
    }))
    writeFileSync(resolve(path, 'package-lock.json'), JSON.stringify(packageLock))
    if (!/empty/.test(path)) {
      promises.push(arb.reify().then(() => process.stderr.write(' ' + basename(path))))
    } else {
      process.stderr.write(' ' + basename(path))
    }
  }

  await Promise.all(promises)
  process.stderr.write('\n')

  for (const path of folders) {
    suite.add('reify ' + basename(path), {
      defer: true,
      setup () {
        if (/no-lockfile/.test(path)) {
          rimraf.sync(resolve(path, 'package-lock.json'))
        }
        if (/empty/.test(path)) {
          rimraf.sync(resolve(path, 'node_modules'))
        }
        if (/no-cache/.test(path)) {
          rimraf.sync(resolve(path, 'cache'))
        }
      },
      fn (d) {
        new Arborist({
          path,
          registry,
          cache: /no-cache/.test(path) ? resolve(path, 'cache') : cache,
        }).reify().then(() => d.resolve(), er => {
          throw er
        })
      },
    })
  }
}

module.exports = suite

if (module === require.main) {
  process.argv.push(basename(__filename, '.js'))
  require('../benchmark.js')
}
