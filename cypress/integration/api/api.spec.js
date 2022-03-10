describe('api', () => {
    it('GET /todos', () => {
        cy.request({
            url: 'https://jsonplaceholder.typicode.com/todos'
        }).then(response => {
            expect(response.status).to.equal(200);
            expect(response.body.length).to.equal(200);
            expect(response.body).to.not.be.null;
        });
        cy.request({
            url: 'https://jsonplaceholder.typicode.com/todos'
        }).then(response => {
            expect(response.body[4].userId).to.eq(1);
            expect(response.body[4].id).to.eq(5);
            expect(response.body[4].title).to.eq('laboriosam mollitia et enim quasi adipisci quia provident illum');
        });
        cy.request({
            url: 'https://jsonplaceholder.typicode.com/todos/test',
            failOnStatusCode: false
        }).then(response => {
            expect(response.status).to.equal(404);
        });
    });
    it('POST /todos', () => {
        const todosData = {
            "userId": 10,
            "id": 201,
            "title": "ipsam aperiam voluptates qui",
            "completed": false
        };
        cy.request('POST', 'https://jsonplaceholder.typicode.com/todos', todosData).then(response => {
            expect(response.status).to.equal(201);
            expect(response.body).to.eql({
                id: 201,
                ...todosData
            });
        });
    });
});