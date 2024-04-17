/// <reference types="cypress" />

describe("Handling data via webdriver uni", () => {
    it("Calculate and assert the total age of all users", ()=>{
        //cypress code
        //cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit("/")
        cy.get('#data-table').invoke('removeAttr', 'target').click({force:true})
        var userDetail = [];
        let numb = 0;
        cy.get('#thumbnail-1 td').each(($el , index, $list) =>{
            userDetail[index] = $el.text();

        }).then(() =>{
            var i;
            for(i=0; i<userDetail.length;i++){
                if(Number(userDetail[i])){
                numb = numb+Number(userDetail[i])
                }
                //cy.log(userDetail[i])
            }
            cy.log("Found age total: "+ numb)
            expect(numb).to.eq(322)
        })

    });

    it("Calculate and assert the age of a given user based on last name", ()=>{
        //cypress code
        //cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit("/")
        cy.get('#data-table').invoke('removeAttr', 'target').click({force:true})
        var userDetail = [];
        let numb = 0;
        cy.get('#thumbnail-1 tr td:nth-child(2)').each(($el , index, $list) =>{
            const text = $el.text();
            if(text.includes("Woods")){
                cy.get('#thumbnail-1 tr td:nth-child(2)').eq(index).next().then(function(age) {
                    const userAge = age.text();
                    expect(userAge).to.eq("80");
                })
            }
        })

    });



})