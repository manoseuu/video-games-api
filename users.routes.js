const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users.controller');
const authMiddleware = require('../middlewares/auth');


router.post('/register', usersController.registerUser);
router.post('/login', usersController.loginUser);


router.get('/profile', authMiddleware, usersController.getProfile);

module.exports = router;
