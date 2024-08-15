// index.js

exports.handler = async (event) => {
  console.log("Event:", JSON.stringify(event, null, 2));
  console.log("Path:", path);

  const path = event.rawPath || event.path || "/";
  console.log(event.rawPath);

  switch (path) {
    case "/":
      return {
        statusCode: 200,
        body: JSON.stringify({ message: "Hello, World!" }),
      };

    case "/hello":
      return {
        statusCode: 200,
        body: JSON.stringify({ message: "Hello, Lambda!" }),
      };

    case "/goodbye":
      return {
        statusCode: 200,
        body: JSON.stringify({ message: "Goodbye, Lambda!" }),
      };

    default:
      return {
        statusCode: 404,
        body: JSON.stringify({ message: "Not Found" }),
      };
  }
};
