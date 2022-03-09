class SearchForm {
    get searchText() {
        return cy.get('#txt')
    }
}

module.exports = SearchForm;