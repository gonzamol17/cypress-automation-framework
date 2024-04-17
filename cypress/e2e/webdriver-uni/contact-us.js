import Homepage_PO from "../../support/pageObjects/webdriver-uni/Homepage_PO";
import Contact_Us_PO from "../../support/pageObjects/webdriver-uni/Contact_Us_PO";

/// <reference types="cypress" />

describe("Test contact us form via WebdriverUni", () => {
    const homepage_PO = new Homepage_PO();//los defino acá para hacerlos global y solo ponerlos una vez para todos los test
    const contact_Us_PO = new Contact_Us_PO();//los defino acá para hacerlos global y solo ponerlos una vez para todos los test

    before(function(){
        cy.fixture('example').then(function(data) {
            //this.data=data;
            globalThis.data = data; 
            //sino funciona lalinea de arriba se prueba con esta
        })
    })

    beforeEach(function() {
        //cy.visit("/" + "Contact-Us/contactus.html")
        //cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
        //const homepage_PO = new Homepage_PO();
        homepage_PO.visitHomepage();
        homepage_PO.clickOn_ContactUs_Button();
    })

    it("Should be able to submit successful submission via contact", ()=>{
        //cypress code
        //cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
        //cy.visit("/")
        //cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
        /* cy.get('[name="first_name"]').type(data.first_name);
        cy.get('[name="last_name"]').type(data.last_name);
        cy.get('[name="email"]').type(data.email);
        cy.get('textarea.feedback-input').type(data.body);
        cy.get('[type="submit"]').click();
        cy.get('h1').should('have.text', 'Thank You for your Message!'); */
        //cy.url().should('include', 'contact-form-thank-you.html');
        //cy.webdriverUni_ContactFormSubmission(Cypress.env("first_name"), data.last_name, data.email, "The first message", 'h1', "Thank You for your Message!");
        //const contact_Us_PO = new Contact_Us_PO();
        contact_Us_PO.contactFrom_Submission(Cypress.env("first_name"), data.last_name, data.email, "The first message", 'h1', "Thank You for your Message!")
    });
    
    it("Should not be able to submit successful submission via contact as all field are required", ()=>{
        //cypress code
        //cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
        //cy.visit("/")
        //cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
        // cy.get('[name="first_name"]').type(data.first_name);
        // cy.get('[name="last_name"]').type(data.last_name);
        // cy.get('textarea.feedback-input').type(data.body);
        // cy.get('[type="submit"]').click();
        // cy.get('body').contains('Error: all fields are required')
        //const contact_Us_PO = new Contact_Us_PO();
        contact_Us_PO.contactFrom_Submission(data.first_name, data.last_name, " ", "The first message", 'body', "Error: Invalid email address");
        //cy.webdriverUni_ContactFormSubmission(data.first_name, data.last_name, " ", "The first message", 'body', "Error: Invalid email address");
    });

})