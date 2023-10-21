const express = require('express');
const router = express.Router();
let candyLocations = [
    {
      "name": "The Witch's Cottage",
      "address": "123 Haunted Lane, Spooksville"
    },
    {
      "name": "Zombie Manor",
      "address": "666 Cemetery Road, Ghoulville"
    },
    {
      "name": "Dracula's Castle",
      "address": "1 Bat Wing Avenue, Transylvania"
    },
    {
      "name": "Ghostly Graveyard",
      "address": "789 Phantom Street, Eerieville"
    },
    {
      "name": "Mad Scientist's Lab",
      "address": "42 Experiment Drive, Frankenstein's Lab"
    },
    {
      "name": "Werewolf's Den",
      "address": "567 Howling Court, Lycanthrope Haven"
    },
    {
      "name": "Pumpkin Patch",
      "address": "31 Jack-O-Lantern Lane, Pumpkinville"
    },
    {
      "name": "Haunted Mansion",
      "address": "999 Spooky Road, Hauntington"
    },
    {
      "name": "Monster's Hideout",
      "address": "13 Monster Avenue, Creepsville"
    },
    {
      "name": "Alien Landing Site",
      "address": "Area 51, Roswell, New Mexico"
    }
]

/**
 * @swagger
 * /candy-locations:
 *   get:
 *     summary: Get a list of candy locations.
 *     description: Returns a list of candy locations along with the type of candy available at each location.
 *     responses:
 *       200:
 *         description: A JSON array of candy locations.
 *         content:
 *           application/json:
 *             example:
 *               - name: Monster's Hideout
 *                 address: 13 Monster Avenue, Creepsville
 *               - nane: Alien Landing Site
 *                 address: Area 51, Roswell, New Mexico
 *     tags:
 *       - Candy
 */
router.get('/', (req, res) => {
    res.send(candyLocations)
})

router.post('/candy-locations', (req, res) => {
    const newCandyLocation = req.body;
    
    if (!newCandyLocation || !newCandyLocation.address || !newCandyLocation.name) {
        return res.status(400).send("Invalid input data");
    }

    // Assuming candyLocations is an array, you can add the new location to the list.
    candyLocations.push(newCandyLocation);

    return res.status(201).send("Candy location added successfully");
});

module.exports = router