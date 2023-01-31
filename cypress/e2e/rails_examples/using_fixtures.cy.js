describe('Rails using rails fixtures examples', function() {
  beforeEach(() => {
    cy.app('clean') // have a look at cypress/app_commands/clean.rb
  })

  it('loading all fixtures', function() {
    cy.appFixtures()
    cy.visit('/')
    cy.get('[data-testid="articles-description"]').should('be.visible')
    cy.get('[data-testid="articles-description"]').should('contain', 'Our blog has 2 articles and counting!')
  })

  it('using single rails fixtures', function() {
    cy.appFixtures({fixtures: ['articles']})
    cy.visit('/')
    cy.get('[data-testid="article-list-item"]').should('have.length', 2)
    cy.get('[data-testid="articles-description"]').should('contain', 'Our blog has 2 articles and counting!')
  })

  it('loading another folder of fixtures', function() {
    cy.appFixtures({fixtures_dir: 'test/fixtures' })
    cy.visit('/')
    cy.get('[data-testid="article-list-item"]').should('have.length', 2)
    cy.get('[data-testid="articles-description"]').should('contain', 'Our blog has 2 articles and counting!')
  })
})

