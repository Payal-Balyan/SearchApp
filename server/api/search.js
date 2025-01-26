const express = require("express");
const router = express.Router();
const question = require("../models/question");

router.get("/", async (req, res) => {
    const { query } = req.query;
  
    // If query is empty, return an empty array
    if (!query || query.trim() === "") {
      return res.json([]); // Return an empty array when query is empty
    }
  
    try {
      const items = await question.find({
        title: { $regex: query, $options: "i" }, // Case-insensitive search
      });
      res.json(items); // Return matching items
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch search results" });
    }
  });
  
module.exports = router;
