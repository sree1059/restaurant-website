#!/usr/bin/env node
const { spawn } = require('child_process');
const path = require('path');

const args = process.argv.slice(2);
const action = args[0] || 'build';
const viteCommand = action === 'start' ? 'dev' : (action === 'build' ? 'build' : action);

const viteBin = path.resolve(__dirname, '../node_modules/.bin/vite');

const child = spawn(process.platform === 'win32' ? 'vite.cmd' : viteBin, [viteCommand, ...args.slice(1)], {
  stdio: 'inherit',
  shell: true,
  env: process.env,
});

child.on('exit', (code) => {
  process.exit(code ?? 0);
});
