const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'bomftf',
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportTitle: 'Projeto do curso de Cypress',
    reportPageTitle: 'Projeto do curso de Cypress'
  },
  e2e: {
    baseUrl: "https://automationpratice.com.br/",
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  },
});
