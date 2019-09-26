const request = require('supertest');

const server = require('../api/server.js');
const db = require('../data/dbConfig.js')

describe("users model", () => {
    beforeEach(async () => {
        await db("users").truncate();
    });

    it("should set environment to testing", () => {
        expect(process.env.DB_ENV).toBe("testing");
    });

    // describe("add()", () => {
    //     it("should add users into the db", async () => {
    //         await Users.add({ username: "billys", password: "tedys" });

    //         const newUser = await db("users");
    //         expect(newUser.username).toBe("billys");
    //     });

    //     describe("/api/auth/register", () => {
    //         it("should return 201", () => {
    //             return request(server)
    //                 .post("/api/auth/register")
    //                 .send({ username: "billys", password: "tedys" })
    //                 .then(res => {
    //                     expect(res.status).toBe(201);
    //                 });
    //         });
    //     });
    //     describe("/api/auth/login", () => {
    //         it("should return status 200", () => {
    //             return request(server)
    //                 .post("/api/auth/login")
    //                 .send({ username: "billys", password: "tedys" })
    //                 .then(res => {
    //                     expect(res.status).toBe(200);
    //                 });
    //         });
    //         it("should have a token", () => {
    //             return request(server)
    //                 .post("/api/auth/login")
    //                 .send({ username: "billys", password: "tedys" })
    //                 .then(res => {
    //                     expect(res.body.token).toHave("token");
    //                 });
    //         });
    //     });
    // });
});

