const { ls, cp } = require('shelljs')
const path = require('path')

function createAppCore(coreDirPath) {
  const appCoreContents = [
    'http',
    'helpers',
    'guards',
    'config',
    'middleware',
    'services',
    'mixins',
    'api.js',
    'logger.js'
  ]
  const existingContents = ls(coreDirPath).filter(content => typeof content === 'string')

  for (const content of appCoreContents) {
    if (!existingContents.includes(content) && content.endsWith('.js')) {
      // Copy the api.js file from docs to the core directory
      const jsPath = path.resolve(__dirname, `../docs/${content}`)
      cp(jsPath, coreDirPath)
    }
  }
}

module.exports = createAppCore
