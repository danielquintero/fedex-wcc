describe('shared-fedex-design-system', () => {
  beforeEach(() => cy.visit('/iframe.html?id=fileuploadercomponent--primary'));

  it('should render the component', () => {
    cy.get('fedex-ui-file-uploader').should('exist');
  });
});
