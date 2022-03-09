class DashboardList {
    list(numb, expectedtext) {
        cy.get('.page-list')
            .find('div')
            .eq(numb)
            .should('have.text', expectedtext);
    }
}
module.exports = DashboardList;