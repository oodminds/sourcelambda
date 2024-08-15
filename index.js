exports.handler = async (event) => {
  // Extract the path from the event object
  const path = event.path || "/";
  console.log("Path:", path);

  // Remove the stage name from the path
  const cleanPath = path.replace(/^\/[^/]+/, "");
  console.log("Clean Path:", cleanPath);

  switch (cleanPath) {
    case "/":
    case "/sourcelambda":
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
