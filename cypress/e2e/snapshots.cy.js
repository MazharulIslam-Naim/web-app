describe('Visual testing homepage.', () => {
  it('Loads the homepage', () => {
    cy.visit('/homepage');
    cy.percySnapshot();
  });

  it('Loads the why8by8', () => {
    cy.visit('https://challenge.8by8.us/why8by8');
    cy.percySnapshot();
  });

  it('Loads the termsofservice', () => {
    cy.visit('/termsofservice');
    cy.percySnapshot();
  });

  it('Loads the privacypolicy', () => {
    cy.visit('/privacypolicy');
    cy.percySnapshot();
  });

  it('Loads the rewards', () => {
    cy.visit('/rewards');
    cy.percySnapshot();
  });

  it('Loads the signup', () => {
    cy.visit('/signup');
    cy.percySnapshot();
  });

  it('Loads the signin', () => {
    cy.visit('/signin');
    cy.percySnapshot();
  });
});

