/// <reference types="cypress" />

describe("Handling IFrame and & Modal", () => {
    it("Handle webuni iframe and modal", ()=>{
        //cypress code
        //cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit("/")
        cy.get('#iframe').invoke('removeAttr', 'target').click({force:true})
        cy.get('#frame').then($iframe => {
            const body = $iframe.contents().find('body')
            cy.wrap(body).as('iframe')

        })

        cy.get('@iframe').find('#button-find-out-more').click()
        cy.get('@iframe').find('#myModal').as('modal')

        cy.get('@modal').should(($expectedText) => {
            const text = $expectedText.text()
            expect(text).to.include('Welcome to webdriveruniversity.com we sell a wide range');
        })
        cy.get('@modal').contains('Close').click()


        

    });


})