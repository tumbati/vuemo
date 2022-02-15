#! /usr/bin/env node

const { program } = require('commander')
const commands = require('./commands')

program.
  version('0.0.1')

program
  .command('init')
  .description('Initialize a new modular architecture')
  .action(commands.init)

program
  .command('generate, g')
  .description('Generates and/or modifies files based on a schematic.')
  .option('m, module <name>', 'Generate module with specified name')

  .action(commands.generate)

program.parse(process.argv)