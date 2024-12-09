const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.random.org',
    browser: 'electron',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
