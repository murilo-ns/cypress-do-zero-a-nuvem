Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (data ={
      firstName: 'João',
      lastName: 'da Silva',
      email: 'joao@teste.com',
      text: "Teste."
}) =>{
    cy.get('#firstName').type(data.firstName)
    cy.get('#lastName').type(data.lastName)
    cy.get('#email').type(data.email)
    cy.get('#open-text-area').type(data.text, {delay:0})
    cy.get('button[type="submit"]').click()
})