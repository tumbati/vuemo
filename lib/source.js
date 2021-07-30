const os = require('os')

const source = () => {
  if (os.platform() === 'win32') {
    // get the path of the current directory
    const cwd = process.cwd()
  }
}