const exec = require('child_process').exec
const path = require('path')

const arg = process.argv[2]
console.log(arg)
if(arg)
    exec('qckwinsvc --uninstall --name "lazy" --description "lazy server" --script \"' + path.resolve(__dirname, "server.js") + "\"  --startImmediately", (err, data) => console.log(err, data))
else
    exec('qckwinsvc --name "lazy" --description "lazy server" --script \"' + path.resolve(__dirname, "server.js") + "\"  --startImmediately", (err, data) => console.log(err, data))
