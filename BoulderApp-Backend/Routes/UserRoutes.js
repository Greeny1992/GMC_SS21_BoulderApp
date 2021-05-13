const express = require('express');
const { check } = require("express-validator");
const router = express.Router(); 
const userController = require("../Controllers/userController")

router.post("/",[
    check('email', 'Please enter valid email').isEmail(),
    check("password", "Please enter a valid password").isLength({min: 6})
], userController.logIn)

module.exports = router;