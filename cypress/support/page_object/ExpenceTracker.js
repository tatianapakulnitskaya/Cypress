const ExpenceForm = require('./components/ExpenceForm');
const SearchForm = require('./components/SearchForm');
const ExpenceTable = require('./components/ExpenceTable');
const DashboardList = require('./components/DashboardList');
const DashboardLink = require('./components/DashboardLink');

class ExpenceTracker {
    expenceForm = new ExpenceForm();
    searchForm = new SearchForm();
    expenceTable = new ExpenceTable();
    dashboardList = new DashboardList();
    dashboardLink = new DashboardLink();

    get addExpence() {
        return cy.get('#addexpense');
    }
    openAbt() {
        cy.visit('https://ej2.syncfusion.com/showcase/typescript/expensetracker/#/about');
    }
    openExp() {
        cy.visit('https://ej2.syncfusion.com/showcase/typescript/expensetracker/#/expense');
    }
    openDsb() {
        cy.visit('https://ej2.syncfusion.com/showcase/typescript/expensetracker/#/dashboard');
    }
}

module.exports = ExpenceTracker;