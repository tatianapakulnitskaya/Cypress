describe('transaction', () => {
    it('check menu', () => {
        cy.visit('https://ej2.syncfusion.com/showcase/typescript/expensetracker/#/about');
        cy.get('.page-list').find('div').eq(0).should('have.text', '\n                Dashboard\n            ');
        cy.get('.page-list').find('div').eq(1).should('have.text', '\n                Transactions\n            ');
        cy.get('.page-list').find('div').eq(2).should('have.text', '\n                About\n            ');
    });
});