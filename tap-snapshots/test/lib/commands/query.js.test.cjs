/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/lib/commands/query.js TAP global > should return global package 1`] = `
[
  {
    "name": "lorem",
    "version": "2.0.0",
    "_id": "lorem@2.0.0",
    "pkgid": "lorem@2.0.0",
    "location": "node_modules/lorem",
    "path": "{CWD}/test/lib/commands/tap-testdir-query-global/global/node_modules/lorem",
    "realpath": "{CWD}/test/lib/commands/tap-testdir-query-global/global/node_modules/lorem",
    "resolved": null,
    "isLink": false,
    "isWorkspace": false
  }
]
`

exports[`test/lib/commands/query.js TAP include-workspace-root > should return workspace object and root object 1`] = `
[
  {
    "name": "project",
    "workspaces": [
      "c"
    ],
    "dependencies": {
      "a": "^1.0.0",
      "b": "^1.0.0"
    },
    "pkgid": "project@",
    "location": "",
    "path": "{CWD}/test/lib/commands/tap-testdir-query-include-workspace-root/prefix",
    "realpath": "{CWD}/test/lib/commands/tap-testdir-query-include-workspace-root/prefix",
    "resolved": null,
    "isLink": false,
    "isWorkspace": false
  },
  {
    "name": "c",
    "version": "1.0.0",
    "_id": "c@1.0.0",
    "pkgid": "c@1.0.0",
    "location": "c",
    "path": "{CWD}/test/lib/commands/tap-testdir-query-include-workspace-root/prefix/c",
    "realpath": "{CWD}/test/lib/commands/tap-testdir-query-include-workspace-root/prefix/c",
    "resolved": null,
    "isLink": false,
    "isWorkspace": true
  }
]
`

exports[`test/lib/commands/query.js TAP linked node > should return linked node res 1`] = `
[
  {
    "name": "a",
    "version": "1.0.0",
    "_id": "a@1.0.0",
    "pkgid": "a@1.0.0",
    "location": "a",
    "path": "{CWD}/test/lib/commands/tap-testdir-query-linked-node/prefix/a",
    "realpath": "{CWD}/test/lib/commands/tap-testdir-query-linked-node/prefix/a",
    "resolved": null,
    "isLink": false,
    "isWorkspace": false
  }
]
`

exports[`test/lib/commands/query.js TAP simple query > should return root object and direct children 1`] = `
[
  {
    "name": "project",
    "dependencies": {
      "a": "^1.0.0",
      "b": "^1.0.0"
    },
    "pkgid": "project@",
    "location": "",
    "path": "{CWD}/test/lib/commands/tap-testdir-query-simple-query/prefix",
    "realpath": "{CWD}/test/lib/commands/tap-testdir-query-simple-query/prefix",
    "resolved": null,
    "isLink": false,
    "isWorkspace": false
  },
  {
    "pkgid": "a@",
    "location": "node_modules/a",
    "path": "{CWD}/test/lib/commands/tap-testdir-query-simple-query/prefix/node_modules/a",
    "realpath": "{CWD}/test/lib/commands/tap-testdir-query-simple-query/prefix/node_modules/a",
    "resolved": null,
    "isLink": false,
    "isWorkspace": false
  },
  {
    "pkgid": "b@",
    "location": "node_modules/b",
    "path": "{CWD}/test/lib/commands/tap-testdir-query-simple-query/prefix/node_modules/b",
    "realpath": "{CWD}/test/lib/commands/tap-testdir-query-simple-query/prefix/node_modules/b",
    "resolved": null,
    "isLink": false,
    "isWorkspace": false
  }
]
`

exports[`test/lib/commands/query.js TAP workspace query > should return workspace object 1`] = `
[
  {
    "name": "c",
    "version": "1.0.0",
    "_id": "c@1.0.0",
    "pkgid": "c@1.0.0",
    "location": "c",
    "path": "{CWD}/test/lib/commands/tap-testdir-query-workspace-query/prefix/c",
    "realpath": "{CWD}/test/lib/commands/tap-testdir-query-workspace-query/prefix/c",
    "resolved": null,
    "isLink": false,
    "isWorkspace": true
  }
]
`
