const fetch = require('node-fetch')
const unzip = require('unzip')
const fs = require('fs')
const path = require('path')

if(check_if_exist()) {
    require('./server')
} else {
    download_program().then(() => require('./server'))
}

async function download_program() {
    const a = await fetch('http://www.nirsoft.net/utils/nircmd.zip')
    a.body.pipe(unzip.Extract({path: path.resolve('c:/nircmd')}))
    return a;
}

function afetch() {
    return new Promise(resolve => {
        fetch('http://www.nirsoft.net/utils/nircmd.zip')
        .then(res => {        
            resolve(res)
        })
    })
}

function check_if_exist () {
    return fs.existsSync(path.resolve('c:/nircmd/nircmd.exe'))
}