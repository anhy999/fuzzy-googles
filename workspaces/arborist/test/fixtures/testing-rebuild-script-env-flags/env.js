const {writeFileSync} = require('fs')
const output = Object.keys(process.env).sort()
  .filter(k => process.env[k] === '1' && /^npm_package_(dev|optional)/.test(k))
  .join('\n')
writeFileSync('env', output)
console.log(output)
console.error('stderr')
