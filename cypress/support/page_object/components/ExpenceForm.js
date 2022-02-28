class ExpenceForm {

    get ELb() {
        return cy.get('.dlg-income-radio-section > .e-radio-wrapper > label > .e-label')
    }
    enterDate(Fdate){
        cy.get('#datepicker')
        .clear()
        .type(Fdate);
        return this
    }
    enterTime(Ftime){
        cy.get('#timepicker')
        .clear()
        .type(Ftime);
        return this
    }
    get Category() {
        return cy.get('.dlg-category-container > :nth-child(1) > .e-float-input > .e-input-group-icon')
    }
    categoryGroup(group) {
        return cy.get('#category_popup').contains(group)
    }
    get amount() {
        return cy.get('#amount')
    }
    get description() {
        return cy.get('input[id=description]')
    }
    get Payment() {
        return cy.get('.dlg-debit-payment > .e-radio-wrapper > label > .e-label')
    }
    get Einfo() {
        return cy.get('.e-footer-content > .e-info')
    }
    fill({amount, description, cgroup}) 
    {
        if (amount) this.amount.type(amount);
        if (description) this.description.type(description);
        if (this.categoryGroup){
            this.Category.click()
            this.categoryGroup(cgroup).click();
        }
    }
}

module.exports = ExpenceForm;