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
        browserName: 'MicrosoftEdge',
        'ms:edgeOptions': {
            args: [
                '-headless',
                '--window-size=1400,1120', `--use-fake-device-for-media-stream`, `--use-fake-ui-for-media-stream`]
        },
        acceptInsecureCerts: true
    }],

    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'error'
}