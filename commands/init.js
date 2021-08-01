const {ls, rm} = require('../lib')
const chalk = require('chalk')
const fs = require('fs')
const fse = require('fs-extra')
const currentPath = process.cwd()
const emoji = require('node-emoji')

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

  /**
   * Creating core module directories
   */

  const modularRootDirectories = ['core', 'modules', 'layouts']
  for (const dir of modularRootDirectories) {
    if (!srcContents.includes(dir)) {
      fs.mkdir(`${currentPath}/src/${dir}`, (err) => {
        if (err) {
          console.log(err)
          return
        }
        console.log(chalk.green(`${emoji.get('file_folder')}: created ${dir} folder`))
      })
    } else {
      const dirName = chalk.bold.blue(dir)
      console.log(chalk.blue(`${emoji.get('file_folder')} ${dirName} already exists`))
    }
  }

  /**
   * Move core folders and files into src folder
   */
  for (const element of srcContents) {
    const movingContents = ['assets', 'components', 'router', 'store', 'store.js', 'router.js']

    if (movingContents.includes(element)) {
      const isDir = fs.statSync(`${currentPath}/src/${element}`).isDirectory()

      if (['router', 'store'].includes(element) && isDir) {
        // If file is router or store and is directory, move contents
        const contents = ls({ path: `/src/${element}`, filter: null})
        for (const content of contents) {
          const source = `${currentPath}/src/${element}/${content}`
          const destination = `${currentPath}/src/core/${element}.js`
          fs.renameSync(source, destination, (err) => {
            if (err) return console.log(err)
            console.log(chalk.green(`${emoji.get('file')}: moved ${content} as ${element}.js to core`))
          })
        }
        
        // Remove directory
        fs.rmdirSync(`${currentPath}/src/${element}`)
      } else {
        // Move directory to src/core
        const source = `${currentPath}/src/${element}`
        const destination = `${currentPath}/src/core/${element}`
        fse.move(source, destination, (err) => {
          if (err) return console.log(err)
          console.log(chalk.green(`${emoji.get('file_folder')}: moved ${element} to core`))
        })
      }
    }
  }

  /**
   * Remove views folder recursively
   */
  rm(`${currentPath}/src/views`)
}

module.exports = init
