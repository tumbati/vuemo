const { ls } = require('shelljs')

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
    if (!existingContents.includes(content)) {
      if (content.endsWith('.js')) {
        
      }
    }
  }
}

module.exports = createAppCore
