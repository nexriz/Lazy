const { spawn, exec } = require('child_process')
const server = require('http').createServer()
const io = require('socket.io')(server)

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
                    console.log('server',cl)
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
})

server.listen(8080, 
    () => console.log('Socket server is running!'))

function control (command) {
    return new Promise((resolve, reject) => {
        try {
            exec(command, (err, data) => {
                    err && console.error(err)
                    resolve(data)
            })
        }
        catch (err) {
            if(err)
                reject(err)            
        }
    })
}