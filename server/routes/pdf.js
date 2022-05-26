const express = require('express');
const router = express.Router();
const pdfController = require('../controllers/pdfController');

// Routes
router.get('/', pdfController.view);
  
module.exports = router;