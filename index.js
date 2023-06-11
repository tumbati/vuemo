#! /usr/bin/env node

const { program } = require('commander')
const commands = require('./commands')

program.
  version('0.0.1')

program
  .command('init')
  .description('Initialize a new modular architecture')
  .option('-js, --js', 'Modularize project with JavaScript')
  .option('-ts, --ts', 'Modularize project with TypeScript')
  .action(commands.init)

program
  .command('generate, g')
  .description('Generates and/or modifies files based on a schematic.')
  .option('m <name>, module <name>', 'Generate module with specified name')

  .action(commands.generate)

program.parse(process.argv)