const fetch = require('node-fetch')
const unzip = require('unzip')
const fs = require('fs')
const path = require('path')

if(!check_if_exist()) {
    download_program().then(() => {
        require('./server')
    })
}
else {
    require('./server')
}

async function download_program() {
    const a = await fetch('http://www.nirsoft.net/utils/nircmd.zip')
    .then(res => {
        res.body.pipe(unzip.Extract({path: path.resolve('c:/nircmd')}))
    })
    return a;
}

function check_if_exist () {
    return fs.existsSync(path.resolve('c:/nircmd/nircmd.exe'))
}