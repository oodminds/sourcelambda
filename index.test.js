const { handler } = require("./index");

describe("Lambda Function Tests", () => {
  test("Lite category returns correct message", async () => {
    const event = {
      body: JSON.stringify({ category: "lite" }),
    };
    const result = await handler(event);

    expect(result.statusCode).toBe(200);
    expect(JSON.parse(result.body).message).toBe("Lite version activated");
  });

  test("Advance category returns correct message", async () => {
    const event = {
      body: JSON.stringify({ category: "advance" }),
    };
    const result = await handler(event);

    expect(result.statusCode).toBe(200);
    expect(JSON.parse(result.body).message).toBe("Advanced version activated");
  });

  test("Dynamic category returns correct message", async () => {
    const event = {
      body: JSON.stringify({ category: "dynamic" }),
    };
    const result = await handler(event);

    expect(result.statusCode).toBe(200);
    expect(JSON.parse(result.body).message).toBe("Dynamic version activated");
  });

  test("Invalid category returns 400", async () => {
    const event = {
      body: JSON.stringify({ category: "invalid" }),
    };
    const result = await handler(event);

    expect(result.statusCode).toBe(400);
    expect(JSON.parse(result.body).message).toBe("Invalid category");
  });

  test("Invalid JSON body returns 400", async () => {
    const event = {
      body: "Not a JSON",
    };
    const result = await handler(event);

    expect(result.statusCode).toBe(400);
    expect(JSON.parse(result.body).message).toBe("Invalid request body");
  });
});
