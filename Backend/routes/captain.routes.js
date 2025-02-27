const express = require('express');
const router = express.Router();
const captainController = require('../controllers/captain.controllers');
const {body} = require('express-validator');
const authMiddleware = require('../middleware/auth.middleware');

router.post('/register',[
    body('fullname.firstname').isLength({min:3}).withMessage("Firstname must be atleast 3 characters long"),
    body('fullname.lastname').isLength({min:3}).withMessage("Lastname must be atleast 3 characters long"),
    body('email').isEmail().withMessage("Email is not valid"),
    body('password').isLength({min:8}).withMessage("Password must be atleast 8 characters long"),
    body('vechile.color').isLength({min:3}).withMessage("Color must be atleast 3 characters long"),
    body('vechile.plate').isLength({min:3}).withMessage("Plate must be atleast 3 characters long"),
    body('vechile.capacity').isInt({min:1}).withMessage("Capacity must be atleast 1"),
    body('vechile.vechileType').isLength({min:3}).withMessage("Vechile type must be atleast 3 characters long"),
],captainController.registerCaptain);

router.post('/login',[
    body('email').isEmail().withMessage("Email is not valid"),
    body('password').isLength({min:8}).withMessage("Password must be atleast 8 characters long"),
],captainController.loginCaptain);

router.get('/profile',authMiddleware.authCaptain,captainController.profileCaptain);
router.get('/logout',authMiddleware.authCaptain,captainController.logoutCaptain);

module.exports = router;