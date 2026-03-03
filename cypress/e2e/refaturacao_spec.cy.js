describe('teste aut', () => {
  it('passes', () => {
    cy.visit('https://app-homologacao.vimbo.com.br/')

    // acessar com conta master 
    cy.get('input[formControlName="usu_email"]')
    .type('sistema@vimbo.com.br')
    cy.get('input[formControlName="usu_senha"]')
    .type('Arp@!135')
    cy.get('button[aria-label="LOGIN"]')
    .click()
    




  })
})