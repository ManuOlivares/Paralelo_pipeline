///<reference types="cypress" />
import 'cypress-plugin-tab';
import 'cypress-file-upload';
import 'cypress-plugin-tab';
import 'cypress-xpath';

describe("Reto de tablas con funciones", () => {

    it("automatizar test biblioteca utilizando funciones ", ()=> {
        const tiempo = 2000;
        cy.visit("https://demoqa.com/books")
        cy.wait(tiempo)
        cy.title().should('eq', 'DEMOQA')

        const datos=[]
        const campo=cy.get('.rt-tbody > :nth-child(1) > .rt-tr > :nth-child(2)')

        cy.get(".rt-td").each(($el, index, $list) => {
            datos[index] = $el.text()
        }).then(() => {                                
            for(let i = 0; i < datos.length; i++){
                cy.log(datos[i])
            }
           // cy.log(`Total de elementos: ${datos.length}`)

            if(datos.includes('Git Pocket Guide')){
                campo.eq(index).next().next().then((author) =>{
                    const Book=author.text()
                    cy.log(`El autor es: ${Book}`)



                })
            
            }

        })
    
    });

});