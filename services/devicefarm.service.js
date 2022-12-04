const AWS = require("aws-sdk"),
    environmentAws = require("../environments")

class AwsDeviceFarmService {

    constructor() {
        this.projectArn = environmentAws.projectArnAws
        this.devicefarm = new AWS.DeviceFarm({ region: environmentAws.regionAws })
    }

    // Get a test grid URL once for all test suites / test cases during this wdio testrunner invocation
    onPrepare(config, capabilities) {
        return new Promise((resolve, reject) => this.devicefarm.createTestGridUrl({
            projectArn: this.projectArn,
            expiresInSeconds: 300
        }, (err, createTestGridUrlResult) => {
            if (err) {
                return reject(err)
            }

            console.log("CreateTestGridUrlResult:", createTestGridUrlResult)
            process.env.AWS_DEVICE_FARM_SERVICE_TEST_GRID_URL = createTestGridUrlResult.url

            resolve()
        }))
    }

    // Set the connection settings on the beforeSession hook. See more: https://github.com/webdriverio/webdriverio/issues/5113
    beforeSession(config, capabilities, specs) {
        return new Promise((resolve, reject) => {

            // Set the default connection timeout to at least 3 minutes
            config.connectionRetryTimeout = 180000 // millis

            const testGridUrl = new URL(process.env.AWS_DEVICE_FARM_SERVICE_TEST_GRID_URL)

            config.protocol = 'https'
            config.hostname = testGridUrl.host
            config.path = testGridUrl.pathname
            config.port = 443

            resolve()
        })
    }

}

module.exports = AwsDeviceFarmService