#! /usr/bin/env node
'use strict';
console.log('Inside custom stencil-dev-server');

process.title = 'stencil-dev-server';
process.on('unhandledRejection', function(r) { console.error(r) });
process.env.TINY_STATIC_LR_BIN = __filename;

console.log("npm config arv: ", process.env.npm_config_argv);

let cmdArgs = process.argv;
const npmRunArgs = process.env.npm_config_argv;
if (npmRunArgs) {
  cmdArgs = cmdArgs.concat(JSON.parse(npmRunArgs).original);
}

const server = require('../server');

server.run(cmdArgs);
