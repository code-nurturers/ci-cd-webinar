const express = require('express');
const router = express.Router();
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
 *               jokes: ["Why did the ghost go to the party?", "Because it heard it was going to be a 'boo'-last!"]
 */
router.get('/', (req, res) => {
  res.json({
    jokes: [
      "Why did the ghost go to the party?",
      "Because it heard it was going to be a 'boo'-last!",
    ],
  });
});

module.exports = router;
