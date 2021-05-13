const express = require('express');
const { check } = require("express-validator");
const router = express.Router(); 
const boulder = require("../Controllers/boulderController.js");


// Retrieve all Boulders
router.get("", boulder.find);

// Create a new Boulder
router.post("",[
    check('name', 'Please insert a name').isString(),
], boulder.create);

// Update a Boulder with boulderId
router.put("/:boulderId", boulder.update);

module.exports = router