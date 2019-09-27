const request = require('supertest');

const server = require('../api/server.js');
const db = require('../data/dbConfig.js')



describe('/classes', () => {
    beforeEach(async () => {
        await db('classes').truncate();
    })

    describe("classes", () => {
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
    describe("classes", () => {
        describe("POST /api/classes", () => {
            it("should return a 201", () => {
                return request(server)
                    .post("/api/classes")
                    .send({
                        name: "dance team zero",
                        type: "aerobic",
                        location: "cisco",
                        duration: "one hour",
                        intensity: "high",
                        max_size: "20",
                        starttime: "monday 11",
                        instructor_id: 1
                    })
                    .then(res => {
                        expect(res.status).toBe(201);
                    });
            });
            it("should return a json object", () => {
                return request(server)
                    .post("/api/classes")
                    .send({
                        name: "dance team zero",
                        type: "aerobic",
                        location: "cisco",
                        duration: "one hour",
                        intensity: "high",
                        max_size: "20",
                        starttime: "monday 11",
                        instructor_id: 1
                    })
                    .then(res => {
                        expect(res.type).toBe("application/json");
                    });
            });
        });


    });

})