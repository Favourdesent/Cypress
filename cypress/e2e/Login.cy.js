describe('As a returning user i want to login and carry out some activity', () => {
  beforeEach(() => {
    cy.visit('https://www.automationexercise.com/');
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    cy.get('[data-qa="login-email"]').type('qat@mailinator.com');
    cy.get('[data-qa="login-password"]').type('123456');
    cy.get('[data-qa="login-button"]').click();
  });
  it('As a logged-in user I want to add to cart', () => {
    cy.get(':nth-child(1) > .panel-heading > .panel-title > a').click();
    cy.get('#Women > .panel-body > ul > :nth-child(2)').click();
    cy.get(':nth-child(7) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
    cy.get('.modal-content').should('be.visible');
    cy.get('.modal-footer > .btn').click();
    cy.get(':nth-child(8) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
    cy.get('.modal-content').should('be.visible');
    cy.get('.modal-body > :nth-child(2)').click();
    cy.get('.col-sm-6 > .btn').click();
    cy.get('.form-control').type('Order placed.');
    cy.get(':nth-child(7) > .btn').click();
    cy.get('[data-qa="name-on-card"]').type('Test card');
    cy.get('[data-qa="card-number"]').type('4100 0000 0000');
    cy.get('[data-qa="cvc"]').type('123');
    cy.get('[data-qa="expiry-month"]').type('01');
    cy.get('[data-qa="expiry-year"]').type('1900');
    cy.get('[data-qa="pay-button"]').click();
    cy.get('.col-sm-9').should('be.visible');

  });
});
