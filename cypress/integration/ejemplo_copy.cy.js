///<reference types="cypress" />
import 'cypress-plugin-tab';
import 'cypress-file-upload';
import 'cypress-xpath';

describe("Reto de tablas con funciones", () => {
  it("automatizar test biblioteca identificando el autor de 'Git Pocket Guide'", () => {
    const tiempo = 2000;

    // Intercepta script conflictivo adplus.js
    cy.intercept('GET', '**/adplus.js', {
      statusCode: 204,
      body: '',
    });

    cy.visit("https://demoqa.com/books");
    cy.wait(tiempo);
    cy.title().should('eq', 'DEMOQA');

    cy.get(".rt-td").each(($el, index) => {
      const texto = $el.text();
      cy.log(`Fila ${index + 1}: ${texto}`);

      if (texto.includes("Git Pocket Guide")) {
        cy.get(".rt-td").eq(index + 2).then(($author) => {
          cy.log(`📚 El autor de 'Git Pocket Guide' es: ${$author.text()}`);
        });
      }
    });
  });
});