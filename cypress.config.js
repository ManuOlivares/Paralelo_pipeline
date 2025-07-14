const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
  
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  viewportWidth: 1500,
  viewportHeight: 900,
  chromeWebSecurity: false,
  defaultCommandTimeout: 15000,
  video: false,
});

