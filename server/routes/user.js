import express from "express";
const router = express.Router();
// const userController = require('../controllers/userController');
import * as userController from "../controllers/userController.js"

// Routes
router.get('/', userController.view);
router.post('/', userController.find);
router.get('/acmanagers', userController.managerAutoComplete);
router.get('/adduser', userController.form);
router.post('/adduser', userController.create);
router.get('/edituser/:id', userController.edit);
router.post('/edituser/:id', userController.update);
router.get('/viewuser/:id', userController.viewall);
router.get('/:id',userController.userDelete);
  
// module.exports = router;

export default router;