const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    /*reportDir: "cypress/reports",*/
    reportPageTitle: "Reporte Personalizable",
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },

  video: false,

  env: {
    grepFilterSpecs: true,
    grepOmitFiltered: true,
    viewportmobile: {
      device: "iphone-xr",
    },
    viewportdesktop: {
      device: "macbook-16",
    },
  },
  e2e: {
    baseUrl: "https://www.edenentradas.com.ar/",
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      require("@bahmutov/cy-grep/src/plugin")(config);
      // IMPORTANT: return the config object
      return config;

      // implement node event listeners here
    },
  },
});
