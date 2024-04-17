/// <reference types="cypress" />

describe("Validate webdriveruni homepage links", () => {
    it("Confirm link redirect to the correct pages", ()=>{
        //cypress code
        cy.visit("/")
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
        cy.url().should('include', 'contactus')
        cy.go('back')
        cy.reload()
        cy.url().should('include', 'https://webdriveruniversity.com/')
        cy.go('forward')
        cy.url().should('include', 'contactus')
        cy.go('back')
        cy.get('#login-portal').invoke('removeAttr', 'target').click({force:true})
        cy.url().should('include', 'Login-Portal')
        cy.go('back')
        cy.get('#to-do-list').invoke('removeAttr', 'target').click({force:true})
        cy.url().should('include', 'To-Do-List')
        cy.go('back')


    });

})