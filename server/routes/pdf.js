import express from "express";
const router = express.Router();

import * as pdfController from "../controllers/pdfController.js"

// Routes
router.get('/', pdfController.view);
  
export default router;