// #!/usr/bin/env node
// const fs = require('fs');
// const readline = require('readline')
// const chalk = require('chalk')
// console.log()

// const dir = fs.readdirSync(process.env.PWD, "utf8")

// function check(dir, src) {
//     let foundSrc = false
//     for(file of dir) 
//         if(file === src) foundSrc = true
//     return foundSrc
// }

// let srcFound = check(dir, "src")

// console.log()
// console.log('   ' + chalk.bgBlue('Project Found!'), chalk.white('Settings for Component:'))
// console.log()

// function test(question) { 
//     const rl = readline.createInterface(process.stdin, process.stdout)
//     return new Promise((resolve) => {
//         rl.question("      "+question, (data) => {
//             rl.close()
//             resolve(data)
//         })
//     })
// }



// async function qn(questions) {
//     let arr = []
//     for(item of questions) {
//         await test(item).then(data => arr.push(data))
//     }
//     return arr
// }
// qn(['name: ', 'age: ']).then(console.log)














