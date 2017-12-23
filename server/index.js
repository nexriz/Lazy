const { spawn, exec } = require('child_process')
const server = require('http').createServer()
const io = require('socket.io')(server)
const commands = require('./commands')

const PORT = process.argv[2] || 3001


io.on('connection', (client) => {
    client.emit(
        'connection', 
        "You are connected"
    )
    client.on(
        'console', 
        (data) => {
            control(data)
                .then(cl => {
                    console.log('server', cl)
                    client.emit('client', cl) })
                .catch(e => {
                    console.error(e)
                    client.emit('client', e) })
        }
    )
    client.on(
        'disconnect', 
        console.log
    )
    process.on(
        'beforeExit', 
        () => client.broadcast.emit(
            'disconnect', 
            'disconect'
        )
    )

})

server.listen(PORT, () => console.log('Socket server is running on port', PORT))

function control(command) { 
        return new Promise((resolve, reject) => {
                const args = command.split(' ')
                if(check_commands(args[0])) {
                    exec(commands[args[0]](args.slice(1).join(" ")), 
                        (err, data) => {
                            resolve(args[0] + ' ' + args.slice(1).join(" "))
                        })
                }
                else {
                    try {
                        exec(command, (err, data) => {
                            err && console.error(err)
                            resolve(data)
                        })
                    }
                    catch(err) {
                        reject(err)
                    }     
            }       
        }
    )
}

function check_commands(command) {
    return command in commands ? true : false;
    // for (cmd in commands) {
        //     if(command === cmd)
        //         return true
        // }
}
