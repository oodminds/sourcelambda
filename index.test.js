// index.test.js

const { handler } = require("./index");

describe("Lambda Function Tests", () => {
  test("Default route returns Hello, World!", async () => {
    const event = { path: "/" };
    const result = await handler(event);

    expect(result.statusCode).toBe(200);
    expect(JSON.parse(result.body).message).toBe("Hello, World!");
  });

  test("Route /hello returns Hello, Lambda!", async () => {
    const event = { path: "/hello" };
    const result = await handler(event);

    expect(result.statusCode).toBe(200);
    expect(JSON.parse(result.body).message).toBe("Hello, Lambda!");
  });

  test("Route /goodbye returns Goodbye, Lambda!", async () => {
    const event = { path: "/goodbye" };
    const result = await handler(event);

    expect(result.statusCode).toBe(200);
    expect(JSON.parse(result.body).message).toBe("Goodbye, Lambda!");
  });

  test("Unknown route returns 404", async () => {
    const event = { path: "/unknown" };
    const result = await handler(event);

    expect(result.statusCode).toBe(404);
    expect(JSON.parse(result.body).message).toBe("Not Found");
  });
});
