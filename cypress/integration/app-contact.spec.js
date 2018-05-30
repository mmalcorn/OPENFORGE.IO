describe('Contact Page', function () {
  beforeEach(() => {
    cy.visit('localhost:3333/contact')
    cy.get('button[type=submit]').as('submitBtn')
  })

  describe('HTML content within the Contact Page', function () {
    describe('Navigation bar', function() {

      it('Nav bar should show the OpenForge logo', function() {
        cy.get('.navbar-brand')
          .should('exist')
          .and('be.visible')
      })

      it('Nav bar should exist on the page with the correct navigation options', function() {

        cy.get('nav')
          .should('exist')

          .and('contain', 'Home')
          .and('be.visible')

          .and('contain', 'About')
          .and('be.visible')

          .and('contain', 'Contact')
          .and('be.visible')

          .and('contain', 'Opportunities')
          .and('be.visible')
      })

      it('Should be able to click on all of the navigation options', function() {
        cy.get('a.nav-link').should('have.length', 5)
      })
    })

    describe('Header', function() {
      it('Header should display with appropriate text content within it', function() {
        const h2Content =  'Let\'s Work Together'
        const pContent = 'Request a Discovery Session Today!'

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

      it('Should contain a Request Now button that scrolls to the form on click of the button', function() {
        cy.get('header')
          .find('.btn')

          .should('exist')
          .and('be.visible')
          .and('contain', 'Request Now')

          .click()

        cy.get('#second-content').scrollIntoView()
      })
    })

    describe('Footer', function() {
      it('Footer component should exist', function() {
        cy.get('app-footer')
        .should('exist')
      })
    })
  })

  describe('Successful form submission', function () {
    it('Should show a success message on submit when all form values have been filled out', function() {
      cy.get('input[name=name]')
        .type('Test Name')
      cy.get('input[name=email]')
        .type('testEmail@gmail.com')
      cy.get('input[name=company]')
        .type('Test Company Name')
      cy.get('input[name=phone]')
        .type('1459341234')
      cy.get('input[name=message]')
        .type('This is a test message')

      cy.get('[type="radio"]')
        .check('Web Development')
      cy.get('[type="radio"]')
        .check('200K')

      cy.get('@submitBtn').click()

      cy.get('div.alert')
      .contains('Thank you')
      .should('be.visible')
    })
  })

  describe('Unsucessful form submission', function() {
    it('DOM should not show success message when all fields of the form are not filled out', function () {

      cy.get('input[name=name]')
       .type('Test Name')

      cy.get('@submitBtn')
        .click()

      cy.get('div.alert')
        .should('not.exist')
    })
  })
})