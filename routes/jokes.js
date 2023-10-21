const openAiService = require('../services/openai')
/**
 * @swagger
 * /jokes:
 *   get:
 *     summary: Get a list of Halloween jokes
 *     responses:
 *       200:
 *         description: A list of Halloween jokes
 *         content:
 *           application/json:
 *             example:
 *               jokes: ["Why can't skeletons fight? They've got no guts!"]
 */
const express = require('express');
const router = express.Router();
let jokes = ["Why can't skeletons fight? They've got no guts!"]
router.get('/', (req, res) => {
  openAiService.generateResponse("Tell me a halloween joke")
  .then((response) => {
    console.log('GPT-3 Response:', response);
    jokes.push(response.content)
    res.json({
      jokes,
    });
    })
    .catch((error) => {
        console.error('Error:', error);
    });
  
});

module.exports = router;
