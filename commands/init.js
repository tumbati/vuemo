const chalk = require('chalk')

function mountTypeScriptProject() {

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
    console.log(chalk.white(chalk.red('You can only choose one, either JavaScript or TypeScript')))
    console.log(chalk.white(chalk.red('For example: `vuemo init --ts`')))
    return
  }

  if (flag.ts) {
    mountTypeScriptProject()
    return
  }

  mountJavaScriptProject()
}

module.exports = init
