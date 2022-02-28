const ExpenceTracker = require('../support/page_object/ExpenceTracker');

describe('transaction', () => {
    it('check menu', () => {
        const transactions = new ExpenceTracker();
        transactions.openAbt();
        transactions.dashboardList.List(0, '\n                Dashboard\n            ');
        transactions.dashboardList.List(1, '\n                Transactions\n            ');
        transactions.dashboardList.List(2, '\n                About\n            ');
    });
});

describe('transaction', () => {
    it('create new transaction', () => {
        const transactions = new ExpenceTracker();
        transactions.openExp();
        transactions.addExpence.click();
        transactions.expenceForm.ELb.click();
        transactions.expenceForm.enterDate('7/20/2017');
        transactions.expenceForm.enterTime('11:00 AM');
        transactions.expenceForm.fill({

            cgroup: 'Salary',
            amount: '5000',
            description: 'Appropriate description'

        });
        transactions.expenceForm.Payment.click();
        transactions.expenceForm.Einfo.click();
        transactions.searchForm.SearchText.click();
        transactions.searchForm.SearchText.type('Salary');
        transactions.searchForm.SearchText.type('{enter}');
        transactions.expenceTable.row(4)
            .should('include.text', 'Salary')
            .and('include.text', 'Appropriate description')
            .and('include.text', 'Debit Card')
            .and('include.text', '7/20/2017')
            .and('include.text', '$ 5000');
    });
});

describe('transaction', function () {
    it('check click on menu item', function () {
        const transactions = new ExpenceTracker();
        transactions.openDsb();
        transactions.dashboardLink.LinkDsb()
        transactions.dashboardLink.Link('/about')
    });
});