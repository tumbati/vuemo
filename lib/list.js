const fs = require('fs')
const { isObject } = require('lodash')

function list(config = null) {
  let path = process.cwd()
  let filter = null

  if (isObject(config)) {
    path += config.path+'/'
    filter = config.filter
  }

  const files = fs.readdirSync(path)

  if (!filter) {
    return files.filter(function (file) {
      return fs.statSync(`${path}/${file}`)
    })
  }

  switch (filter) {
    case 'file': {
      return files.filter(function (file) {
        return fs.statSync(`${path}/${file}`).isFile()
      })
    }
    case 'dir': {
      return files.filter(function (file) {
        return fs.statSync(`${path}/${file}`).isDirectory()
      })
    }
    default: {
      return files
    }
  }
}

module.exports = list