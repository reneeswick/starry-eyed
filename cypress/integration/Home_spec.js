describe('Home view', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  });

  it('Should display the welcome message and app summary', () => {
    cy.get('.home-view')
      .should('contain', 'Feeling Starry Eyed?')
      .should('contain', 'Check out our space blog')
  });

  it('Should display the application\'s navigation', () => {
    cy.get('nav')
      .should('contain', 'Home')
      .should('contain', 'Blogs')
      .should('contain', 'Saved for Later')
      .should('contain', 'ISS Report')
  });

  it('Should allow user to switch the view from light to dark mode', () => {
    cy.get('input[type="checkbox"]')
      .check({ force: true })
    cy.get('.dark')
      .should('be.visible')
    cy.get('input[type="checkbox"]')
      .uncheck({ force: true })
    cy.get('dark')
      .should('not.exist')
  });

  it('Should display an error page if user tries to visit a page that does not exist', () => {
    cy.visit('http://localhost:3000/.kjadhfkgjh')
    cy.get('h2').contains('Oh no!')
      .should('be.visible')
    cy.get('p').contains('does not exist')
      .should('be.visible')
  });
});
