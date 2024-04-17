/// <reference types="cypress" />

describe("Test mouse actions", () => {
    it("Scroll element into view", ()=>{
        //cypress code
        //cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit("/")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})

    });

    it("I should be abel to drag and drop a draggable item", ()=>{
        //cypress code
        //cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit("/")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})
        cy.get('#draggable').trigger('mousedown', {which: 1})//lo que hace este comando es hacer click en el centro del elemento este
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', {force:true})

    });
  
    it("I should be abel to perform a doble mouse click", ()=>{
        //cypress code
        //cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit("/")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})
        cy.get('#double-click').dblclick()

    });


    it.only("I should be abel to hold down the left mouse click button on a given element", ()=>{
        //cypress code
        //cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit("/")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})
        //cy.get('#click-box').trigger('mousedown', {which:1}) es como hacer click con el mouse con el botón de la derecha
        cy.get('#click-box').trigger('mousedown', {which:1}).then(($element) => {
            expect($element).to.have.css('background-color', 'rgb(0, 255, 0)')

        })

    });

})