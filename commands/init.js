const ls = require('../lib/list')
const chalk = require('chalk')

function init(...options) {
  const directories = ls('dir')

  if (!directories.includes('src')) {
    const src = chalk.bold.green('src')
    console.log(chalk.red(`Cannot find ${src} folder`))
    return
  }

  
}

module.exports = init
