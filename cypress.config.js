const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.{js, jsx, ts, tsx, feature}",
    baseUrl: "https://webdriveruniversity.com",
    chromeWebSecurity: false,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    video: false,
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      configFile: 'reporter-config.json'
    },
    //este código es para cuando quiero que un test falle vuelva a ejecutarse una vez mas automáticamente
    //retries:{
    //  runMode:0,
    //  openMode:1

    //},
    env: {
      first_name: "Sarah",
      webdriveruni_homepage: "https://webdriveruniversity.com"
    }
    
  
  },
});
