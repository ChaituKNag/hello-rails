describe('Rails using scenarios examples', function() {
  beforeEach(() => {
    cy.app('clean') // have a look at cypress/app_commands/clean.rb
  })

  it('setup basic scenario', function() {
    cy.appScenario('basic')
    cy.visit('/')
    cy.get('[data-testid="articles-description"]').should('be.visible')
    cy.get('[data-testid="articles-description"]').should('contain', 'Our blog has 2 articles and counting!')

  })


  it('example of missing scenario failure', function() {
    cy.visit('/')
    cy.appScenario('basic')
    // cy.appScenario('missing') // uncomment these if you want to see what happens
  })

  it('example of missing app failure', function() {
    cy.visit('/')
    cy.appScenario('basic')
    // cy.app('run_me') // uncomment these if you want to see what happens
  })
})
