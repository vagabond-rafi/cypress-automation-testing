
describe("SauceDemo E2E Testing", () => {

  it("should complete the shopping cart checkout process", () => {

    // Step 1: Visit SauceDemo
    cy.visit("https://www.saucedemo.com/");

    // Step 2: Login
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();

    // Step 3: Verify successful login
    cy.url().should("include", "/inventory.html");

    // Step 4: Add four products to cart
    cy.get("#add-to-cart-sauce-labs-backpack").click();
    cy.get("#add-to-cart-sauce-labs-bike-light").click();
    cy.get("#add-to-cart-sauce-labs-bolt-t-shirt").click();
    cy.get("#add-to-cart-sauce-labs-fleece-jacket").click();

    // Step 5: Verify cart quantity
    cy.get(".shopping_cart_badge").should("have.text", "4");

    // Step 6: Open shopping cart
    cy.get(".shopping_cart_link").click();

    // Step 7: Remove two products
    cy.get("#remove-sauce-labs-bike-light").click();
    cy.get("#remove-sauce-labs-backpack").click();

    // Step 8: Verify remaining cart quantity
    cy.get(".shopping_cart_badge").should("have.text", "2");

    // Step 9: Proceed to checkout
    cy.get("#checkout").click();

    // Step 10: Enter checkout information
    cy.get("#first-name").type("John");
    cy.get("#last-name").type("Snow");
    cy.get("#postal-code").type("123");

    // Step 11: Continue to checkout overview
    cy.get("#continue").click();

    // Step 12: Verify checkout overview
    cy.url().should("include", "/checkout-step-two.html");

    // Step 13: Finish the order
    cy.get("#finish").click();

    // Step 14: Verify successful order completion
    cy.get("#checkout_complete_container")
      .should("be.visible");

    cy.get(".complete-header")
      .should("have.text", "Thank you for your order!");

  });

});
