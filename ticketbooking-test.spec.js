describe('Travel Agency Test', function() {

        it('finds the content "type"', function () {

            cy.visit('https://blazedemo.com/')

            cy.wait(1000)

            //Click on the dropdown and select Boston as source
            cy.get('body > .container > form > .form-inline:nth-child(1)').select('Boston')
            //Click on the dropdown and select Berlin as Destination
            cy.get('body > .container > form > .form-inline:nth-child(4)').select('Berlin')
            //Click on Find Flights
            cy.get('body > .container > form > .container > .btn').click()
            //Validate the redirection
            cy.contains('Flights from Boston to Berlin: ').should('be.visible')
            //Select the United Airlines Flight
            cy.get('.table > tbody > tr:nth-child(2) > td > .btn').click()
            //Validate the redirection
            cy.contains('Your flight from TLV to SFO has been reserved.').should('be.visible')
            //Fill in the details
            cy.get('.container > form > .control-group > .controls > #inputName').click()
            //Fill in Name
            cy.get('.container > form > .control-group > .controls > #inputName').type('Test')
            //Fill in Address
            cy.get('.container > form > .control-group > .controls > #address').type('Testing123')
            //Fill in City
            cy.get('.container > form > .control-group > .controls > #city').type('Test')
            //Fill in State
            cy.get('.container > form > .control-group > .controls > #state').type('Test')
            //Fill in Zip Code
            cy.get('.container > form > .control-group > .controls > #zipCode').type('12345')
            //Fill in Credit Card Number Type
            cy.get('.container > form > .control-group > .controls > #creditCardNumber').click()
            //Fill in Credit Card Number
            cy.get('.container > form > .control-group > .controls > #creditCardNumber').type('123456789')
            //Fill in Credit Card Month
            cy.get('.container > form > .control-group > .controls > #creditCardMonth').click()
            //Type in Month
            cy.get('.container > form > .control-group > .controls > #creditCardMonth').type('3')
            //Type in Year
            cy.get('.container > form > .control-group > .controls > #creditCardYear').type('2021')
            //Click on name on card field
            cy.get('.container > form > .control-group > .controls > #nameOnCard').click()
            //Type in name on card
            cy.get('.container > form > .control-group > .controls > #nameOnCard').type('Test')
            //Click on purchase flight
            cy.get('.container > form > .control-group > .controls > .btn').click()
            //Validate the success message
            cy.contains('Thank you for your purchase today!').should('be.visible')
            //Validate the id for booking
            cy.get('tbody > :nth-child(1) > :nth-child(1)').should('be.visible')
        })

})