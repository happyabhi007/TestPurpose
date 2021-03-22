describe('Timer Test', function() {

  it('finds the content "type"', function () {

    cy.visit('https://e.ggtimer.com/')

    cy.wait(1000)

    //Click on the time field
    cy.get('.EggTimer-start-content > .EggTimer-start-main > .EggTimer-start-time-input > .EggTimer-start-time-input-wrapper > #EggTimer-start-time-input-text').click()
    //Enter the time as 25 seconds
    cy.get('.EggTimer-start-content > .EggTimer-start-main > .EggTimer-start-time-input > .EggTimer-start-time-input-wrapper > #EggTimer-start-time-input-text').type('25')
    //Create a clock and wait for 25 seconds
    cy.clock()
    cy.tick(25000)
    cy.get('.EggTimer-start > .EggTimer-start-content > .EggTimer-start-main > .EggTimer-start-time-input > .validTime').click()

  })

})