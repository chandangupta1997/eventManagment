const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

const authenticate = require('../middleware/authentication');
const authorize = require('../middleware/authorization');


// User Api
router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.get('/user/:userId/profile',authenticate.authentication ,userController.getUser);
router.put('/user/:userId/profile',authenticate.authentication,authorize.authorization , userController.updateProfile);


// Event Api 



module.exports = router;