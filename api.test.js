const request = require("supertest");
const { app } = require("./index");

describe("GET /hex-to-rgb", () => {
  test("returns rgb for valid hex", async () => {
    // use URL encoded '#' or drop it
    const res = await request(app).get("/hex-to-rgb?hex=FF0000");
    expect(res.statusCode).toBe(200);
    expect(res.body.rgb).toEqual({ r: 255, g: 0, b: 0 });
  });

  test("returns error for invalid hex", async () => {
    const res = await request(app).get("/hex-to-rgb?hex=ZZZZZZ");
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty("error");
  });
});
