describe('transaction', () => {
    it('create new transaction', () => {
        cy.visit('https://ej2.syncfusion.com/showcase/typescript/expensetracker/#/expense');
        cy.get('#addexpense').click();
        cy.get('.dlg-income-radio-section > .e-radio-wrapper > label > .e-label').click();
        cy.get('#datepicker').clear();
        cy.get('#datepicker').type('7/20/2017');
        cy.get('#timepicker').clear();
        cy.get('#timepicker').type('11:00 AM');
        cy.get('.dlg-category-container > :nth-child(1) > .e-float-input > .e-input-group-icon').click();
        cy.get('#category_popup').contains('Salary').click();
        cy.get('#amount').type('5000');
        cy.get('input[id=description]').type('Appropriate description');
        cy.get('.dlg-debit-payment > .e-radio-wrapper > label > .e-label').click();
        cy.get('.e-footer-content > .e-info').click();
        cy.get('#txt').click();
        cy.get('#txt').type('Salary');
        cy.get('#txt').type('{enter}');
        cy.get('[aria-rowindex="4"]')
            .should('include.text', 'Salary')
            .and('include.text', 'Appropriate description')
            .and('include.text', 'Debit Card')
            .and('include.text', '7/20/2017')
            .and('include.text', '$ 5000');
    });
});