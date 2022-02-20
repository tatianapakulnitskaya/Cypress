describe('transaction', function () {
    it('check click on menu item', function () {
        cy.visit('https://ej2.syncfusion.com/showcase/typescript/expensetracker/#/dashboard')
            .then(() => {
                return cy.get('#nav-about').click();
            });
        cy.url().should('include', '/about');
    });
});