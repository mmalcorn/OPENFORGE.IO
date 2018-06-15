describe('Contact Page', function () {
  beforeEach(() => {
    cy.visit('https://openforge-dev.firebaseapp.com/contact')
    cy.get('button[type=submit]').as('submitBtn')
  })

  describe('Header', function() {
    it('Header should display with appropriate text content within it', function() {
      const h2Content =  'Let\'s Work Together'
      const pContent = 'Request'

      cy.get('header')
        .should('exist')
        .and('be.visible')
      cy.get('.hero')
        .contains(h2Content)
        .and('be.visible')
      cy.get('.hero')
        .contains(pContent)
        .and('be.visible')
    })

    it('Should contain a Request Now button that scrolls to the form on click', function() {
      cy.get('header')
        .find('.btn')
        .should('exist')
        .and('be.visible')
        .and('contain', 'Request Now')
        .click()
      cy.get('#second-content').click()
    })
  })

  describe('Contact Form', function() {
    let nameField;
    let emailField;
    let companyField;
    let phoneField;
    let messageField;
    let radioField1;
    let radioField2;

    describe('Successful form submission', function () {
      beforeEach(() => {
        nameField = cy.get('input[name=name]')
        .type('Test Name')
        emailField = cy.get('input[name=email]')
        .type('testEmail@gmail.com')
        companyField = cy.get('input[name=company]')
        .type('Test Company Name')
        phoneField = cy.get('input[name=phone]')
        .type('1459341234')
        messageField = cy.get('input[name=message]')
        .type('This is a test message')
        radioField1 = cy.get('[type="radio"]')
        .check('Web Development')
        radioField2 = cy.get('[type="radio"]')
        .check('200K')
        cy.get('@submitBtn').click()
      })

      it('Should show a success message on submit when all form values have been filled out', function() {
        cy.get('div.alert')
        .should('exist')
        .contains('Thank you')
      })

      it('All fields should be clear after successful form submission', function() {
        nameField.should('have.value', '')
        emailField.should('have.value', '')
        companyField.should('have.value', '')
        phoneField.should('have.value', '')
        messageField.should('have.value', '')
      })
    })
    describe('Unsucessful form submission', function() {
      it('DOM should not show success message when all fields of the form are not filled out', function () {
        nameField = cy.get('input[name=name]')
        .type('Test Name')
        cy.get('@submitBtn').click()
        cy.get('div.alert').should('not.exist')
      })
    })
  })
})
