///<reference types="cypress" />
import 'cypress-plugin-tab';
import 'cypress-file-upload';
import 'cypress-xpath';

describe("Reto de tablas con funciones", () => {
  it("automatizar test biblioteca utilizando funciones", () => {
    const tiempo = 2000;
    cy.visit("https://demoqa.com/books");
    cy.wait(tiempo);
    cy.title().should('eq', 'DEMOQA');

    cy.get(".rt-td").each(($el, i) => {
      const textoCelda = $el.text();

      cy.log(`Fila ${i + 1}: ${textoCelda}`);

      if (textoCelda.includes("Git Pocket Guide")) {
        cy.get('.rt-tbody > :nth-child(1) > .rt-tr')
          .eq(i)
          .find(':nth-child(4)')
          .then(($author) => {
            const autor = $author.text();
            cy.log(`🔍 El autor de "Git Pocket Guide" es: ${autor}`);
          });
      }
    });
  });
});