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
        browserName: 'chrome',
        acceptInsecureCerts: true
    }],

    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'error',

    beforeTest: async function (test, context) {
        await browser.maximizeWindow()
    },
}