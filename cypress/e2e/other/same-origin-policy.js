/// <reference types="cypress" />

describe("Cypress web security", () => {
    it("Validate visiting two different domains", ()=>{
        cy.visit("https://webdriveruniversity.com/");
        cy.visit("https://automationteststore.com/");
        

    });

    it("Validate visiting two different domain via user actions", ()=>{
        cy.visit("https://webdriveruniversity.com/");
        cy.get('#automation-test-store').invoke('removeAttr', 'target').click()
        
    });

    //no estaría funcionando, si funcionara debería agregar en el cypress.config.js la línea 
    //experimentalSessionAndOrigin: true
    
    it.skip("origin command", ()=>{
        cy.origin('webdriveruniversity.com', () => {
            cy.visit("/");

        });
        
        cy.origin('automationteststore.com', () => {
            cy.visit("/");

        });
        
    });

})