import { Server } from 'miragejs';
import { makeServer } from '@fedex/shared-util-mock-server';
import { getGreeting } from '../support/app.po';

describe('sign in page', () => {
  let server: Server;

  beforeEach(() => {
    server = makeServer({ environment: 'test' });

    cy.visit('/');
  });

  afterEach(() => {
    cy.wait(500).then(() => {
      server.shutdown();
    });
  });

  it('should display sign in message', () => {
    getGreeting('h2').contains('Sign in to your account');
  });

  describe('signin form', () => {
    beforeEach(() => {
      cy.get('#email').type('jhon.doe@email.com');
      cy.get('#password').type('S#p3Rs3CR3tp4Ssw0rD');
    });

    xit('it displays form validation', () => {
      cy.get('#firstName').clear();
      cy.get('[data-test-id=first-name-errors]')
        .should('exist')
        .should('contain.text', 'required');

      cy.get('#password').clear().type('lalalala');
      cy.get('[data-test-id=password-errors]')
        .should('exist')
        .should(
          'contain.text',
          'should contain at least one lower, upper, digit and symbol character'
        );
    });

    it('can submit a valid form', () => {
      cy.get('[data-cy=submit]').should('be.enabled').click();
    });
    it('gives user feedback', () => {
      cy.get('[data-cy=submit]').click();
      cy.get('[data-test-id=signin-errors]')
        .should('exist')
        .should(
          'contain.text',
          'We could not sign you in. Please try again with the correct email and password combination.'
        );
    });
  });
});
