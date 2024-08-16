exports.handler = async (event) => {
  let body;
  try {
    body = JSON.parse(event.body);
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Invalid request body" }),
    };
  }

  // Extract the category from the request body
  const category = body.category;

  switch (category) {
    case "lite":
      return {
        statusCode: 200,
        body: JSON.stringify({ message: "Lite version activated" }),
      };

    case "advance":
      return {
        statusCode: 200,
        body: JSON.stringify({ message: "Advanced version activated" }),
      };

    case "dynamic":
      return {
        statusCode: 200,
        body: JSON.stringify({ message: "Dynamic version activated" }),
      };

    default:
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Invalid category" }),
      };
  }
};
