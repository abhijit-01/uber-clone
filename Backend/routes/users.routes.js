const express = require('express');
const router = express.Router();
const {body} = require("express-validator");
const userController = require('../controllers/user.controller');

router.post("/register",[
    body('email').isEmail().withMessage("Please enter a valid email"),
    body('fullnae').isLength({mnin:3}).withMessage("Full name should be at least 3 characters long"),
    body('password').isLength({min:6}).withMessage("Password should be at least 6 characters long"),
],
    userController.registerUser
)

router.post('/login',[
    body('email').isEmail().withMessage("Please enter a valid email"),
    body('password').isLength({min:6}).withMessage("Password should be at least 6 characters long"),
],
    userController.loginuser
)
console.log('User routes loaded');





module.exports = router;