import User from "../../support/pages/userApi/userApi.PO";
const userAPI = new User();

describe("API Test", () => {
  it("should verify user details", () => {
    // Call the endpoint
    userAPI.getUsers().then((response) => {
      // Verify the status code of the response.
      cy.expect(response.status).to.eqls(200);
      // Verify that the user with username “Kamren” has a city of “Roscoeview”.
      const user = response.body.find((user) => user.username === "Kamren");
      cy.expect(user.address.city).to.eq("Roscoeview");
    });
  });
});
