# Test Assignment
## Project Structure
This project uses Cypress for end-to-end testing. The project structure is organized as follows:

    cypress
    ├── e2e
    │   ├── addToCart
    │   │   └── addToCart.cy.js
    │   ├── userAPI
    │   │   └── userAPI.cy.js
    │   └── support
    │       ├── pages
    │       │   ├── addToCart
    │       │   └── userAPI
    │       └── index.js
    ├── plugins
    │   └── index.js
    ├── screenshots
    ├── videos
    └── cypress.json

## Test Suites
## UI Tests

The addToCart.cy.js file located in the cypress/e2e/addToCart directory contains the tests for the UI scenarios.

## API Tests
The userAPI.cy.js file located in the cypress/e2e/userAPI directory contains the tests for the API scenarios.

## Running Tests
To run the tests, execute the following command:
```
npm run cy:open
```
To run only the UI tests:
```
npm run cy:UI
```
To run only the API tests:

npm run cy:API

Note that npm run cy:run will run all tests, including both UI and API tests.