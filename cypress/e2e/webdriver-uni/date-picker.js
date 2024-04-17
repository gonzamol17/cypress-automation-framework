/// <reference types="cypress" />

describe("Test datepicker via webdriver uni", () => {
    it("Select the date from the datepicker", ()=>{
        cy.visit("/")
        cy.get('#datepicker').invoke('removeAttr', 'target').click({force:true})
        cy.get('#datepicker').click();
        //let date = new Date();
        //date.setDate(date.getDate()) 
        //cy.log(date.getDate())//get current date example: 22

        //let date1 = new Date();
        //date1.setDate(date.getDate() + 5)
        //cy.log(date1.getDate()) //get current date example: 22 + 5 = 27

        var date = new Date();
        date.setDate(date.getDate() + 2);

        var futureYear = date.getFullYear();//obtengo el presente año
        var futureMonth = date.toLocaleString("default" , {month:'long'});//obtengo el present mes
        var futureDay = date.getDate();//obtengo el corriente día + 1 porque en la línea 16 agregué un día,
        cy.log("future Year to select: "+futureYear)
        cy.log("future Month to select: "+futureMonth)
        cy.log("future Day to select: "+futureDay)

        function selectMonthAndYear(){
            cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate =>{
                if(!currentDate.text().includes(futureYear)){//este metodo lo que hace es que si no es fecha del futuro que se siga moviendo de mes para llegar al siguiente año
                    cy.get('.next').first().click();
                    selectMonthAndYear();//esto llama de nuevo a la función y la vuelve a ejecutar

                }
            }).then(() => {
                cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate =>{
                    if(!currentDate.text().includes(futureMonth)){//este metodo lo que hace es que si no es fecha del futuro que se siga moviendo de mes para llegar al siguiente año
                        cy.get('.next').first().click();
                        selectMonthAndYear();//esto llama de nuevo a la función y la vuelve a ejecutar
                    }
                })

             })
        }
        function selectFutureDate(){
            cy.get('[class="day"]').contains(futureDay).click();
        }
        selectMonthAndYear();  
        selectFutureDate();             

    });


})