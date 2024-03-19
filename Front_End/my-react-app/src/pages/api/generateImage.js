// pages/api/generateImage.js

import Cors from "micro-cors";

const cors = Cors();

export default cors(async function handler(req, res) {
  try {
    const { description } = req.body || {};

    // Use environment variable for API key
    // eslint-disable-next-line no-undef
    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      throw new Error("OpenAI API key not provided");
    }

    const response = await fetch("https://api.openai.com/v1/images", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        prompt: description,
        // Add any other parameters as needed for your specific use case
      }),
    });

    const result = await response.json();
    res.status(200).json(result);
  } catch (error) {
    console.error("Error generating image:", error);
    res.status(500).json({ error: `Internal Server Error: ${error.message}` });
  }
});
