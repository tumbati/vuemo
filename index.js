#! /usr/bin/env node

const { program } = require('commander')
const commands = require('./commands')

program.
  version('0.0.1')

program
  .command('init')
  .description('Initialize a new modular architecture')
  .action(commands.init)

program.parse(process.argv)