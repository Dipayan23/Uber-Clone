const express = require('express');
const router = express.Router();
const {body} =require("express-validator");
const userController = require("../controllers/user.controllers");
const authMiddlewareUser = require('../middleware/auth.middleware');

router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
],
    userController.registerUser
)

router.post('/login', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
],
    userController.loginUser
)

router.get('/profile', authMiddlewareUser.authUser, userController.profileUser);
router.post('/logout', authMiddlewareUser.authUser, userController.logoutUser);

module.exports = router;