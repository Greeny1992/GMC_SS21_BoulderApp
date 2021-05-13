const express = require('express');
const { check } = require("express-validator");
const router = express.Router(); 
const boulderInteraction = require("../Controllers/boulderInteractionController.js");


// Retrieve Interactions for boulder
router.get("/:boulderId", boulderInteraction.find);

// Create a new Interaction
router.post("", boulderInteraction.create);

// Update a Interaction with interactionId
router.put("/:interactionId", boulderInteraction.update);
module.exports = router;