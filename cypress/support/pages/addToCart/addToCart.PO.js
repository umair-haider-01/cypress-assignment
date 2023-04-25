class addToCart {
  searchFieldSelector() {
    return "#twotabsearchtextbox";
  }
  selectSecondItemSelector() {
    return "[data-index='2'] [data-component-type='s-product-image'] img";
  }

  addToCartButtonSelector() {
    return "#add-to-cart-button";
  }
  verifyCartItemSelector() {
    return ".a-truncate-full";
  }
  verifyCartItemQuantitySelector() {
    return ".a-dropdown-prompt";
  }

  goToCartButtonSelector() {
    return "a:contains('Go to Cart')";
  }

  thisOrderContainsGiftSelector() {
    return "#sc-buy-box-gift-checkbox";
  }

  searchAndAddItemToCart(text) {
    // Search for “gaming keyboards”
    cy.get(this.searchFieldSelector()).type(text + "{enter}");
    // Add the second result returned to cart.
    cy.get(this.selectSecondItemSelector()).click();
    cy.get(this.addToCartButtonSelector()).click();
  }

  verifyCartDetails() {
    // Go to the cart.
    cy.get(this.goToCartButtonSelector()).first().click({ force: true });
    // Verify that the cart contains the item added.
    cy.get(this.verifyCartItemSelector()).should("have.length", 1);
    // Verify that quantity of the item in the cart is 1.
    cy.get(this.verifyCartItemQuantitySelector()).should("contain.text", "1");
  }

  selectGiftOption() {
    // Click the “This order contains a gift” checkbox and verify that the checkbox is ticked
    cy.get(this.thisOrderContainsGiftSelector()).check();
    cy.get(this.thisOrderContainsGiftSelector()).should("be.checked");
  }
}
export default addToCart;
