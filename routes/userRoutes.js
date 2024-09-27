const express = require('express');
const router = express.Router();
const { submitForm } = require('../controllers/userController.js');

router.post('/submit', submitForm);

module.exports = router;
