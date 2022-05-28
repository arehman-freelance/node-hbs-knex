import express from "express";
const router = express.Router();
import * as loginController from '../controllers/loginController.js';

// Routes
router.get('/', loginController.view);
router.post('/', loginController.login);
router.get('/out', loginController.logout);
  
export default router;