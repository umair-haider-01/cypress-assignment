import addToCart from "../../support/pages/addToCart/addToCart.PO";

const cartPage = new addToCart();

describe("Add To Cart", () => {
  before(() => {
    // Go to url.
    cy.visit("/");
  });

  it("Should Search, Add Item To Cart & Verify Cart Details", () => {
    // Search for “gaming keyboards”
    cartPage.searchAndAddItemToCart("gaming keyboards");
    cartPage.verifyCartDetails();
    cartPage.selectGiftOption();
  });
});
