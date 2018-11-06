const fs = require('fs')

function cat(fileName) {
  fs.readFile(`./${fileName}`, 'utf8', (err, data) => {
    if (err) {
      throw err
    } else {
      process.stdout.write('the files reads: ' + data)
      process.stdout.write('prompt > ')
    }
  })
}

module.exports = cat
