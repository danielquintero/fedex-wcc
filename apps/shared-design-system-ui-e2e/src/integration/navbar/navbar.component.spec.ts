describe('shared-fedex-design-system', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=navbarcomponent--primary&knob-navigation')
  );

  it('should render the component', () => {
    cy.get('fedex-ui-navbar').should('exist');
  });
});
