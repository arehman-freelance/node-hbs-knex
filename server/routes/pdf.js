const express =  require("express");
const router = express.Router();

const pdfController = require("../controllers/pdfController.js");

// Routes
router.get('/', pdfController.view);
  
module.exports = router;
