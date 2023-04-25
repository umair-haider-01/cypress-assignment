class User {
  getUsers() {
    // Call the endpoint.
    return cy.request(`${Cypress.env("api-baseURL")}/users`);
  }
}
export default User;
