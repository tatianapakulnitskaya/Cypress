class DashboardList {
    List(numb, expectedtext) {
        cy.get('.page-list')
        .find('div')
        .eq(numb)
        .should('have.text', expectedtext);
        return this
       
    }
}
module.exports = DashboardList;

