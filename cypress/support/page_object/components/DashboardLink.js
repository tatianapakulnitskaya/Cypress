class DashboardLink {
    linkDsb() {
        cy.visit('https://ej2.syncfusion.com/showcase/typescript/expensetracker/#/dashboard')
            .then(() => {
                return cy.get('#nav-about').click();
            });
    }
    link(expectedtext) {
        cy.url()
            .should('include', expectedtext);
    }
}

module.exports = DashboardLink;