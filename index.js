// index.js

exports.handler = async (event) => {
  const path = event.path || "/";

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
