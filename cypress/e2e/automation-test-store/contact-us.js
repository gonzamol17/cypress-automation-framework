/// <reference types="cypress" />

describe("Test contact us form via WebdriverUni", () => {
    it.only("Should be abel to submit successful submission via contact", ()=>{
        //cypress code
        cy.visit("https://automationteststore.com/");
        //cy.get('#contact-us').click()
        cy.get("a[href$='contact']555").click().then(function(itemFooterText){
            cy.log("Selected the following item: " + itemFooterText.text())
        });
        cy.get('#ContactUsFrm_first_name').type("Pablo");
        cy.get('#ContactUsFrm_email').type("pablo@hotmail.com");
        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email');
        cy.get('#ContactUsFrm_enquiry').type("First solution for the problem");
        cy.get("button[title='Submit']").click();
        cy.get(".mb40 p:nth-child(3)").should('have.text', 'Your enquiry has been successfully sent to the store owner!');

    });


})