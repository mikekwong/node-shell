const pwd = require('./pwd')
const ls = require('./ls')

//Output a prompt:
process.stdout.write('prompt > ');

//The stdin 'data event fires after a user types in a line
process.stdin.on('data', (poop) => {
    let dataString = poop.toString().trim()
    if (dataString === 'pwd') {
        pwd()
    } else if (dataString === 'ls') {
        ls()
    } else {
    const cmd = poop.toString().trim(); //remove newLine
    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
    }
})