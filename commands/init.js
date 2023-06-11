const chalk = require('chalk')
const cwd = process.cwd()
const { rm } = require('../lib')

function mountTypeScriptProject() {
  /**
   * Remove views folder recursively from src directory
   */
  rm(`${cwd}/src/views`)
}

function mountJavaScriptProject() {

}

function init(flag) {
  if (!flag) {
    mountTypeScriptProject()
    return
  }

  const options = Object.keys(flag)

  if (!options.length) {
    mountTypeScriptProject()
    return
  }

  if (options.includes('ts') && options.includes('js')) {
    console.log(chalk.red('You can only choose one, either JavaScript or TypeScript'))
    console.log(chalk.red('For example: `vuemo init --ts`'))
    return
  }

  if (flag.ts) {
    mountTypeScriptProject()
    return
  }

  mountJavaScriptProject()
}

module.exports = init
