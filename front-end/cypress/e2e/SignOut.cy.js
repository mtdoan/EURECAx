describe("Sign-out Spec", () => {
  it("Able to sign out after sign in", () => {
    cy.visit("http://localhost:3006/#/signIn");
    cy.get('input[id="email"]').type("admin@gmail.com");
    cy.get('input[id="password"]').type("123");
    cy.get('button[type="submit"]').click();

    cy.get('h4[class="profile-name"]').click();
    cy.get('li[class="dropdownItem"]').contains("Log out").click();

    cy.url().should("be.eq", "http://localhost:3006/#/signIn");
    cy.getCookie("jwt").should("be.null");
  });
});
