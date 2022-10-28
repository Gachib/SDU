const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController.js');

router.get('/', usersController.index);

router.post('/login', usersController.login);

module.exports = router;