const fetch = require('node-fetch')
const unzip = require('unzip')
const fs = require('fs')
const path = require('path')

if(check_if_exist()) {
    require('./server')
} else {
    download_program(fetch, unzip, path).then(() => require('./server'))
}

async function download_program(fetch, unzip, path) {
    const nir_package = await fetch('http://www.nirsoft.net/utils/nircmd.zip')
    nir_package.body.pipe(unzip.Extract({path: path.resolve('c:/nircmd')}))
    return nir_package;
}


function check_if_exist () {
    return fs.existsSync(path.resolve('c:/nircmd/nircmd.exe'))
}


            // function afetch() {
            //     return new Promise(resolve => {
            //         fetch('http://www.nirsoft.net/utils/nircmd.zip')
            //         .then(res => {        
            //             resolve(res)
            //         })
            //     })
            // }