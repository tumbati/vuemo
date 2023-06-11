const fs = require('fs')
const chalk = require('chalk')

function remove(path) {
  const pathExist = fs.existsSync(path)

  if (!pathExist) {
    console.log(chalk.red(`=> ${path} does not exist`))
    return
  }

  if (fs.lstatSync(path).isDirectory()) {
    fs.readdirSync(path).forEach(file => remove(`${path}/${file}`))
    fs.rmdirSync(path)
  } else {
    fs.unlinkSync(path)
  }
}

module.exports = remove