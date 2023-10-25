const express = require('express');
const router = express.Router();
let candyLocations = [
  {
    "name": "The Witch's Cottage",
    "address": "123 Haunted Lane, Spooksville",
    "latitude": 29.7531,
    "longitude": -95.3594
  },
  {
    "name": "Zombie Manor",
    "address": "666 Cemetery Road, Ghoulville",
    "latitude": 29.5522,
    "longitude": -95.0973
  },
  {
    "name": "Dracula's Castle",
    "address": "1 Bat Wing Avenue, Transylvania",
    "latitude": 29.7376,
    "longitude": -95.4646
  },
  {
    "name": "Ghostly Graveyard",
    "address": "789 Phantom Street, Eerieville",
    "latitude": 29.7586,
    "longitude": -95.3857
  },
  {
    "name": "Mad Scientist's Lab",
    "address": "42 Experiment Drive, Frankenstein's Lab",
    "latitude": 29.7577,
    "longitude": -95.3554
  },
  {
    "name": "Werewolf's Den",
    "address": "567 Howling Court, Lycanthrope Haven",
    "latitude": 29.6789,
    "longitude": -95.4052
  },
  {
    "name": "Pumpkin Patch",
    "address": "31 Jack-O-Lantern Lane, Pumpkinville",
    "latitude": 29.7125,
    "longitude": -95.3818
  },
  {
    "name": "Haunted Mansion",
    "address": "999 Spooky Road, Hauntington",
    "latitude": 29.6949,
    "longitude": -95.5293
  },
  {
    "name": "Monster's Hideout",
    "address": "13 Monster Avenue, Creepsville",
    "latitude": 29.7224,
    "longitude": -95.3218
  },
  {
    "name": "Alien Landing Site",
    "address": "Area 51, Roswell, New Mexico",
    "latitude": 29.9169,
    "longitude": -95.6145
  }
];


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