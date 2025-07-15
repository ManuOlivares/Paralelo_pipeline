const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
        specPattern: "cypress/integration/**/*.cy.{js,jsx,ts,tsx}",
        baseUrl: "https://demoqa.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      projectId: "77445e42-4c46-4928-b943-82ee6237043d"
    },
  },
  viewportWidth: 1500,
  viewportHeight: 900,
  chromeWebSecurity: false,
  defaultCommandTimeout: 15000,
  projectId: "cogu32",
  video: false,
});

