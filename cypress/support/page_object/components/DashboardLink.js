class DashboardLink {
    LinkDsb() {
        cy.visit('https://ej2.syncfusion.com/showcase/typescript/expensetracker/#/dashboard')
            .then(() => {
                return cy.get('#nav-about').click();
            });

    }
    Link(expectedtext) {
        cy.url()
            .should('include', expectedtext);
        return this

    }
}

module.exports = DashboardLink;