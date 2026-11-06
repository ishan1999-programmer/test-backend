const request = require("supertest");
const app = require("./app");

describe("GET /health", () => {
  test("should return status code 200", async () => {
    const response = await request(app).get("/health");

    expect(response.statusCode).toBe(200);
  });

  test("should return correct JSON response", async () => {
    const response = await request(app).get("/health");

    expect(response.body).toEqual({
      status: "OK",
      message: "Server is running",
    });
  });
});
