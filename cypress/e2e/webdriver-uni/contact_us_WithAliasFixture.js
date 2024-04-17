/// <reference types="cypress" />

describe("Test contact us form via WebdriverUni", () => {
    before(function() {
        cy.fixture("userDetails").as("user")
        
     })

    it("Should be able to submit successful submission via contact", ()=>{
        cy.visit("/")
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
        cy.get("@user").then((user) => {
            cy.get('[name="first_name"]').type(user.first_name);
            cy.get('[name="email"]').type(user.email);
            //cy.webdriverUni_ContactFormSubmission(user.first_name, user.email, 'body', "Error: all fields are required");
        })
        

    });


})