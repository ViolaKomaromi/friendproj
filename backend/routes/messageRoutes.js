const express = require('express');
const controller = require('../controllers/messageController');
const Message = require('../models/Message');

const router = express.Router();

router.post('/message', controller.newMessage);

// router.post('/login', controller.login);

module.exports = router;
