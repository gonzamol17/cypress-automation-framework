/// <reference types="cypress" />

describe("Verify variables, cypress commands and jquery commands", () => {
    it("Navigating to specific product pages", ()=>{
        //cypress code
        //la siguiente forma puede funcionar, pero no es la mejor manera de hacer el código
        cy.visit("https://automationteststore.com/");
        //const makeupLink = cy.get("a[href*='product/category&path']").contains("Makeup");
        //makeupLink.click();
        //const skincareLink = cy.get("a[href*='product/category&path']").contains("Skincare");
        //skincareLink.click();

        //es el approach recomendado
        cy.get("a[href*='product/category&path']").contains("Makeup").click();
        cy.get("a[href*='product/category&path']").contains("Skincare").click();

    });

    it("Navigating to specific product pages", ()=>{
        //cypress code
        cy.visit("https://automationteststore.com/");
        cy.get("a[href*='product/category&path']").contains("Makeup").click();
        //Will be failed
        //const header = cy.get("h1 .maintext");
        //cy.log(header);

        cy.get("h1 .maintext").then(($headerText)=>{
            const headerText = $headerText.text()
            cy.log("Found header Text: " + headerText)
            expect(headerText).is.eq("Makeup")
        })
      
    });

    it.only("Validate properties of the contact us page", ()=>{
        //cypress code
        cy.visit("https://automationteststore.com/index.php?rt=content/contact");

        //first example is command and chaining
        cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name')

        //jquery approach
        cy.contains('#ContactUsFrm', 'Contact Us Form').then(text =>{
            const firstNameText = text.find('#field_11').text()
            expect (firstNameText).to.contain('First name')

            //Embebed commands (enclosure)
            cy.get('#field_11').then(fnText =>{
                cy.log(fnText.text())
                cy.log(fnText)
            })

        })

 
      
    });

})