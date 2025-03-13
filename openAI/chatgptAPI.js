const express = require("express");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const router = express.Router();

// Replace your OpenAI API key with Gemini AI setup
const genAI = new GoogleGenerativeAI("AIzaSyC9S1x9AqgePUtOBTJlNGtMNJHm28c6WRQ");

// Use the Gemini model for content generation
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

router.post("/quiz", async (req, res) => {
  const { prompt } = req.body;
  try {
      const result = await model.generateContent(prompt);
      const textResponse = result.response.text();

      // Limit the response to 150 words
      const limitedResponse = textResponse.split(" ").slice(0, 150).join(" ");

      res.send(limitedResponse);
  } catch (error) {
      res.status(500).send({ error: error.message });
  }
});

router.post("/describe", async (req, res) => {
  const { prompt } = req.body;
  try {
      const result = await model.generateContent(prompt);
      const textResponse = result.response.text();

      // Limit the response to 150 words
      const limitedResponse = textResponse.split(" ").slice(0, 150).join(" ");

      res.send(limitedResponse);
  } catch (error) {
      res.status(500).send({ error: error.message });
  }
});


router.post("/chat", async (req, res) => {
  const { prompt } = req.body;
  try {
      const result = await model.generateContent(prompt);
      const textResponse = result.response.text();

      // Limit the response to 100 words
      const limitedResponse = textResponse.split(" ").slice(0, 100).join(" ");

      res.send(limitedResponse);
  } catch (error) {
      res.status(500).send({ error: error.message });
  }
});


module.exports = router;
