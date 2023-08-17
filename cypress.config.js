const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.edenentradas.com.ar/",
    e2e: {
      setupNodeEvents(on, config) {
        // implement node event listeners here
      },
    },
  },
});
