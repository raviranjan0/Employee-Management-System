import express from 'express';
import authMiddleware from '../middleware/authMiddleware.js';
import { addDepartment } from '../controllers/departmentController.js';

const router = express.Router();

// Define the POST route for adding a department
router.post('/add', authMiddleware, addDepartment);
  
export default router;