const ExpenceTracker = require('../support/page_object/ExpenceTracker');

describe('transaction', () => {
    it('check menu', () => {
        const transactions = new ExpenceTracker();
        transactions.openAbt();
        transactions.dashboardList.list(0, '\n                Dashboard\n            ');
        transactions.dashboardList.list(1, '\n                Transactions\n            ');
        transactions.dashboardList.list(2, '\n                About\n            ');
    });
});

describe('transaction', () => {
    it('create new transaction', () => {
        const transactions = new ExpenceTracker();
        transactions.openExp();
        transactions.addExpence.click();
        transactions.expenceForm.expenceLb.click();
        transactions.expenceForm.enterDate('7/20/2017');
        transactions.expenceForm.enterTime('11:00 AM');
        transactions.expenceForm.fill({

            cgroup: 'Salary',
            amount: '5000',
            description: 'Appropriate description'

        });
        transactions.expenceForm.payment.click();
        transactions.expenceForm.einfo.click();
        transactions.searchForm.searchText.click();
        transactions.searchForm.searchText.type('Salary');
        transactions.searchForm.searchText.type('{enter}');
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
        transactions.dashboardLink.linkDsb()
        transactions.dashboardLink.link('/about')
    });
});