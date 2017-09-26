const io = require('socket.io-client')
const rl = require('readline')
const color = require('chalk')
const socket = io('http://localhost:8080')

socket.on(
    'connection', 
    (data) => {
        console.log(color.green(data))
        loop()
    }
)
socket.on(
    'disconnection', 
    (data) => console.log(color.yellow(data))
)

const inout = []
let shouldExit = false;

async function loop () {
    while(!shouldExit) {
        await question({prompt: '-> '}).then(data => {
            inout.push(data)
            console.log(
                color.green('Server: \n'), 
                color.grey(data.output)
            )
        })

    }
} 

function question ({prompt}) {
    return new Promise((resolve, reject) => {
        const q = rl.createInterface(
            process.stdin, 
            process.stdout
        )
        q.setPrompt(
            color.cyan(prompt), 
            prompt.lenght)
        q.prompt()
        q.on('line', (text) => {
            if(text === 'clear') {
                q.close()
                console.log('\x1Bc')
                resolve({
                    input: 'cleared', 
                    output: 'cleared'
                })               
            }
            else {
                q.close()
                socket.emit('console', text)
                socket.on('client', (message) =>{
                    if(text === 'exit') {
                        shouldExit = true
                        process.exit()
                    }
                    resolve({ 
                        input: text, 
                        output: message
                    })
                })
            }
        })        
    })
}