const request = require('supertest');

const server = require('../api/server.js');
const db = require('../data/dbConfig.js')



describe('/user', () => {
    beforeEach(async () => {
        await db('users').truncate();
    })

    describe("users", () => {
        describe("GET /", () => {
            it("returns a 200 OK message", () => {
                return request(server)
                    .get("/")
                    .then(res => {
                        expect(res.status).toBe(200);
                    });
            });
        });
    });

})