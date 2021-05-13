const express = require('express');
const { check } = require("express-validator");
const router = express.Router(); 
const like = require("../Controllers/likeController.js");


// Create a new Like
router.post("/:boulderId", like.create);

// Delete a like with boulderId and userId
router.delete("/:boulderId/", like.delete);

module.exports = router;
