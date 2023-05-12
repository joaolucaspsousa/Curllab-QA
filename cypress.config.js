const { defineConfig } = require('cypress')

module.exports = defineConfig({
    e2e: {
        baseUrl: 'https://dev.curllab.com',
        env: {
            hideCredentials: true,
            requestMode: true,
        },
        experimentalRunAllSpecs: true,
    },
    viewportWidth: 1366,
    viewportHeight: 768,
    fixturesFolder: false,
    video: false,
})