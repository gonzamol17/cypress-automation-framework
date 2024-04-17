/// <reference types="cypress" />

describe("Test file upload via Webdriver uni", () => {
    it("Upload a File .......", ()=>{
        //cypress code
        //cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit("/")
        cy.get('#file-upload').scrollIntoView().invoke('removeAttr', 'target').click({force:true})
        cy.get('#myFile').selectFile("cypress/fixtures/luke.png");
        cy.get('#submit-button').click();



    });

    it.only("Upload not File .......", ()=>{
        //cypress code
        //cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit("/")
        cy.get('#file-upload').scrollIntoView().invoke('removeAttr', 'target').click({force:true})
        cy.get('#submit-button').click();



    });


})