/// <reference types="cypress" />

describe("Verify autocomplete dropdown lists via webdriveruni", () => {
    it("Select specifics products via autocomplete list", ()=>{
        //cypress code
        //cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit("/")
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({force:true})
        cy.get('#myInput').type('A')
        cy.get('#myInputautocomplete-list>*').each(($el, index, $list) => {
            const prod = $el.text();
            const productToSelect = 'Avacado';
            if (prod === productToSelect){
                //$el.click(); este comando fue deprecado y se usa el de abajo
                $el.trigger('click');
                cy.get('#submit-button').click();
                cy.url().should('include', productToSelect)

            }

        }).then(() =>{
            cy.get('#myInput').type('g')
            cy.get('#myInputautocomplete-list>*').each(($el, index, $list) => {
                const prod = $el.text();
                const productToSelect = 'Grapes';
                if (prod === productToSelect){
                    $el.trigger('click');
                    cy.get('#submit-button').click();
                    cy.url().should('include', productToSelect)

                }
            })
        })

    });

  
})