const fs = require('fs')
const chalk = require('chalk')

function remove(path) {
  const pathExist = fs.existsSync(path)

  if (!pathExist) {
    const error = new Error(chalk.red(`${chalk.bold(path)} does not exist`))
    throw new Error(error)
  }

  if (fs.lstatSync(path).isDirectory()) {
    fs.readdirSync(path).forEach(file => {
      const curPath = `${path}/${file}`
      remove(curPath)
    })
    fs.rmdirSync(path)
  } else {
    fs.unlinkSync(path)
  }
}

module.exports = remove