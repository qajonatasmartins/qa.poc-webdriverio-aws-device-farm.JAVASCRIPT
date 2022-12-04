const AwsDeviceFarmService = require("../services/devicefarm.service")

exports.config = {
    runner: 'local',

    services: [
        // Use the devicefarm.service.js to automatically generate a remote URL
        // that will be used to create all web drivers from this testrunner
        [AwsDeviceFarmService]
    ],

    // Define which test specs should run.
    specs: [
        '../test/specs/**/*.js'
    ],

    capabilities: [{
        maxInstances: 5,
        browserName: 'firefox',
        'moz:firefoxOptions': {
            "args": ["-headless"],
            // "args": [""],
            "prefs": { "media.navigator.streams.fake": true, "media.navigator.permission.disabled": true }
        },
        acceptInsecureCerts: true
    }],

    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'error'
}