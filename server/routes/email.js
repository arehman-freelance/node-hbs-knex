import express from "express";
const router = express.Router();
import * as emailController from '../controllers/emailController.js';

// Routes
router.get('/', emailController.send);
  
export default router;