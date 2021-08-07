const currentPath = process.cwd()
const chalk = require('chalk')

const generate = () => {
  const schema = process.argv[3].trim()
  const schemaName = process.argv[4].trim()

  switch (schema) {
    case 'module': case 'm':
      if (!currentPath.endsWith('/modules')) {
        const warn = chalk.red(`Cannot find ${chalk.bold('modules')} folder`)
        console.log(warn)
      }
      break;
  }
}

module.exports = generate
