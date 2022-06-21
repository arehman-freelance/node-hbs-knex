const express =  require("express");
const router = express.Router();
const itemController = require('../controllers/itemController.js');

// Routes
router.get('/', itemController.view);
router.get('/edititem/:id', itemController.edit);
router.post('/edititem/:id', itemController.update);
  
module.exports = router;
