const ls = require('../lib/list')
const chalk = require('chalk')
const fs = require('fs')
const currentPath = process.cwd()

function init(...options) {
  const directories = ls('dir')

  if (!directories.includes('src')) {
    const src = chalk.bold.green('src')
    console.log(chalk.red(`Cannot find ${src} folder`))
    return
  }

  const srcContents = ls({path: `/src`, filter: null})
  const importantFiles = ['App.vue', 'main.js', 'router', 'store']
  
  for (const file of importantFiles) {
    if (!srcContents.includes(file)) {
      const fileName = chalk.bold.green(file)
      console.log(chalk.red(`Cannot find ${fileName} file`))
      return
    }
  }

  const modularRootDirectories = ['core', 'modules', 'layouts']
  for (const dir of modularRootDirectories) {
    if (!directories.includes(dir)) {
      fs.mkdir(`${currentPath}/${dir}`, (err) => {
        if (err) {
          console.log(err)
          return
        }
        console.log(chalk.green(`Created ${dir} folder`))
      })
    }
  }
}

module.exports = init
