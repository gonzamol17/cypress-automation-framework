/// <reference types="cypress" />

describe("Interact with dropdown list via webdriveruni", () => {
    it("Select specifics values via dropdown list", ()=>{
        //cypress code
        //cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit("/")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
        cy.get('#dropdowm-menu-1').should('have.value', 'java') //este sirve para saber el valor x default
        cy.get('#dropdowm-menu-1').select('c#')
        cy.get('#dropdowm-menu-2').select('testng').should('have.value', 'testng')
        cy.get('#dropdowm-menu-3').select('JQuery').contains('JQuery')

    });


    it.only("Challenge", ()=>{
        //cypress code
        //cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit("/")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
        cy.get('#dropdowm-menu-2').select('maven').should('have.value', 'maven') 
        cy.get('#dropdowm-menu-2').select('TestNG').contains('TestNG') // esta es así porque estamos trabajando con Texto y no el atributo value
    
    
    });

  


})