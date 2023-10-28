describe("Generate-Challenge-Statement spec", () => {

    it ("Go through dashboard flow and export Json", () => {
        cy.visit("http://localhost:3006/#/signIn");
        cy.get('input[id="email"]').type("admin@gmail.com");
        cy.get('input[id="password"]').type("123"); 
        cy.get('button[type = submit]').click();

        cy.visit("http://localhost:3006/#/");
        cy.get('.execute-button').click();

        cy.get('input[type="text"]').eq(0).click().type("design a solution for reconnaissance drones");
        cy.get('input[type="text"]').eq(1).click().type("the Australian NAVY");
        cy.get('input[type="text"]').eq(2).click().type("detect pirate activity along coastal areas and neighbouring oceans.");
        cy.get('textarea[placeholder="Jot some things down..."]').click().type("Jot somethings down...");

        cy.contains('Next').click();
        cy.contains('Next').click();
        cy.contains('Next').click();
        cy.contains('Next').click();
        cy.contains('Next').click();

        cy.contains('Export JSON').click();
        cy.contains('Execute').click();
        cy.get('.continue-button').click();
    })

})