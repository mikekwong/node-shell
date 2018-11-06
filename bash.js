const pwd = require('./pwd')
const ls = require('./ls')
const cat = require('./cat')
const curl = require('./curl')

//Output a prompt:
process.stdout.write('prompt > ')

//The stdin 'data event fires after a user types in a line
process.stdin.on('data', poop => {
  let dataString = poop
    .toString()
    .trim()
    .split(' ')
  if (dataString[0] === 'pwd') {
    pwd()
  } else if (dataString[0] === 'ls') {
    ls()
  } else if (dataString[0] === 'cat') {
    cat(dataString[1])
  } else if (dataString[0] === 'curl') {
    curl(dataString[1])
  } else {
    const cmd = poop.toString().trim() //remove newLine
    process.stdout.write('You typed: ' + cmd)
    process.stdout.write('\nprompt > ')
  }
})
