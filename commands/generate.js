const currentPath = process.cwd()
const chalk = require('chalk')

const generate = () => {
  const schema = process.argv[3].trim()
  const schemaName = process.argv[4].trim()

  switch (schema) {
    case 'module': case 'm':
      if (currentPath.endsWith('/modules')) {
        const warn = chalk.red(`Cannot find ${chalk.bold('modules')} folder`)
        console.log(warn)
      } else {
        const moduleName = schemaName.charAt(0).toUpperCase()+schemaName.slice(1).toLowerCase()
        const files = [
          `${schemaName}-store.js`,
          `${schemaName}-router.js`,
          'index.js',
          'components',
          'pages',
          'services',
          `${moduleName}Module.vue`
        ]

        console.log(files)
      }
      break;
  }
}

module.exports = generate
