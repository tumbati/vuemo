const fs = require('fs')

function list(filter = null) {
  const path = process.cwd()
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