const path = require('path')

module.exports = {
    mute: () => `${path.resolve('c:/nircmd/nircmd.exe')} mutesysvolume 1`,
    unmute: () => `${path.resolve('c:/nircmd/nircmd.exe')} mutesysvolume 0`,
    setvolume: setvolume => `${path.resolve('c:/nircmd/nircmd.exe')} setsysvolume ${65535 * ((setvolume > 100 ? 100 : setvolume) / 100)}`,
}