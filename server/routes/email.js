const express = require('express');
const router = express.Router();
const emailController = require('../controllers/emailController');

// Routes
router.get('/', emailController.send);
  
module.exports = router;