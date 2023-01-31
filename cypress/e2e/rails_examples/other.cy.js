describe('Rails Other examples', function() {
  it('cypress eval', function() {
    cy.app('clean') // have a look at cypress/app_commands/clean.rb
    cy.appEval("Article.create(title: 'Hello Eval', body: 'Hell eval')")

    cy.visit('/')
    cy.get('table').find('tbody').should(($tbody) => {
      expect($tbody).not.to.contain('Multi Command')
      expect($tbody).to.contain('Hello Eval')
    })
  })

  it('runs multiple commands', function() {
    cy.appCommands([{ name: 'clean' },
                    { name: 'scenarios/basic' },
                    { name: 'eval', options: "Article.create(title: 'Multi Command', body: 'Multi command body')" }])
    cy.visit('/')

    cy.get('table').find('tbody').should(($tbody) => {
      expect($tbody).not.to.contain('Hello Eval')
      expect($tbody).to.contain('Multi Command')
      expect($tbody).to.contain('I am a Postman')
    })
  })
})
