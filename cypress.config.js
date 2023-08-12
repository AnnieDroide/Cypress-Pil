const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    viewportmobile: {
      device: "iphone-xr",
    },
    viewportdesktop: {
      device: "macbook"
    }


  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
