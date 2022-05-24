const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');

// Routes
router.get('/', loginController.view);
router.post('/', loginController.login);
router.get('/out', loginController.logout);
  
module.exports = router;