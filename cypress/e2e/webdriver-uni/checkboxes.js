/// <reference types="cypress" />

describe("Verify checkboxes via webdriveruni", () => {
    beforeEach(function() {
        //cy.visit("/")
        //cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
        cy.navigateTo_WebdriverUni_Checkbox_Page();
    })
    it("Check and validate checkboxes", ()=>{
        //cy.get('#checkboxes > :nth-child(1) > input').check()
        //cy.get('#checkboxes > :nth-child(1) > input').check().should('be.be.checked')
        cy.get('#checkboxes > :nth-child(1) > input').as('option-1')
        cy.get('@option-1').check().should('be.checked')
        

    });

    it("Uncheck and validate checkboxes", ()=>{
        cy.get(':nth-child(5) > input').as('option-3')
        cy.get('@option-3').uncheck().should('not.be.checked')
        
    });

    it("Validate multiplecheckboxes", ()=>{
        cy.get("input[type='checkbox']").check(["option-1", "option-2", "option-3"]).should('be.checked')
        
    });


})