const path = require('path')
const nirdir = path.resolve('c:/nircmd/nircmd.exe')

module.exports = {
    mute: () => `${nirdir} mutesysvolume 1`,
    unmute: () => `${nirdir} mutesysvolume 0`,
    setvolume: value => `${nirdir} setsysvolume ${volume(value)}`,
}

function volume(value) {
    return 65535 * ((value > 100 || value < 0 ? 100 : value) / 100)
}