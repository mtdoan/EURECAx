describe("Sign-in Spec", () => {
  it("Valid credentials entered - Able to sign in", () => {
    cy.visit("http://localhost:3006/#/signIn");
    cy.get('input[id="email"]').type("admin@gmail.com");
    cy.get('input[id="password"]').type("123");
    cy.get('button[type="submit"]').click();

    cy.url().should("eq", "http://localhost:3006/#/");
    cy.getCookie("jwt").should("not.be.empty");
  });

  it("Invalid credentials entered - Unable to sign in", () => {
    cy.visit("http://localhost:3006/#/signIn");
    cy.get('input[id="email"]').type("admin1@gmail.com");
    cy.get('input[id="password"]').type("321");
    cy.get('button[type="submit"]').click();

    cy.url().should("eq", "http://localhost:3006/#/signIn");
    cy.getCookie("jwt").should("be.null");
  });
});
