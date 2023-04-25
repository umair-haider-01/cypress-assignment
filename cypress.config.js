const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env:{
    // Defining BaseURL for API
    "api-baseURL":"https://jsonplaceholder.typicode.com"
  },
  e2e: {
    // Defining BaseURL for UI
    baseUrl: "http://www.amazon.com"
  }
});
