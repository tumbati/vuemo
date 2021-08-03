const fs = require('fs')
const { ls, cp } = require('shelljs')
const path = require('path')

function createAppCore(coreDirPath) {
  const appCoreContents = [
    'http',
    'helpers',
    'config',
    'middleware',
    'services',
    'mixins',
    'api.js',
    'logger.js'
  ]
  const existingContents = ls(coreDirPath).filter(content => typeof content === 'string')

  for (const content of appCoreContents) {
    const contentPath = path.resolve(__dirname, `../docs/${content}`)
    const fileStatus = fs.lstatSync(contentPath)

    if (!existingContents.includes(content)) {
      if (fileStatus.isFile()) {
        cp(contentPath, coreDirPath)
      }

      if (fileStatus.isDirectory()) {
        cp('-r', contentPath, coreDirPath)
      }
    }
  }
}

module.exports = createAppCore
