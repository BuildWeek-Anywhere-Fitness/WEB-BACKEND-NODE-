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
    describe("user", () => {
        describe("POST /api/users/register", () => {
            it("should return a 201", () => {
                return request(server)
                    .post("/api/users/register")
                    .send({
                        username: "bill",
                        password: "ted"
                    })
                    .then(res => {
                        expect(res.status).toBe(201);
                    });
            });
            it("should return a json object", () => {
                return request(server)
                    .post("/api/users/register")
                    .send({
                        username: "thelma",
                        password: "louise"
                    })
                    .then(res => {
                        expect(res.type).toBe("application/json");
                    });
            });
        });

        describe("POST /api/auth/login", () => {
            it("should return a 200 OK status", () => {
                return request(server)
                    .post("/api/users/login")
                    .send({
                        username: "neo",
                        password: "matrix"
                    })
                    .then(res => {
                        expect(res.status).toBe(200);
                    });
            });
            it("should return a JSON object", () => {
                return request(server)
                    .post("/api/users/login")
                    .send({
                        username: "brennan",
                        password: "dale"
                    })
                    .then(res => {
                        expect(res.type).toMatch(/json/);
                    });
            });
        });
    });

})