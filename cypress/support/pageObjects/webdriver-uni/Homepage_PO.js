class Homepage_PO{
    visitHomepage() {
        cy.visit(Cypress.env("webdriveruni_homepage")); //esto lo saco de la variable de ambiente que tengo en cypress.config

    }

    clickOn_ContactUs_Button() {
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
    }


}

export default Homepage_PO;//esto es para exportar esta clase y tiene que tener el mismo nombre que la clase