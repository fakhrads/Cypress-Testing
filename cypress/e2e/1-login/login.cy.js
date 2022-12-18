describe('Test web BWA login', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080)
    cy.visit('https://opensource-demo.orangehrmlive.com/')
  })
  
  it('can click login button', () => {
    cy.get("[name='username']").type("Admin")
    cy.get("[name='password']").type("admin123")
    cy.get('form').submit();
  })

})