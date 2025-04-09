import express from 'express'
import { login, verify } from '../controllers/authController.js';
import verifyUser from '../middleware/authMiddleware.js';


const router = express.Router();

router.post('/login', login)
router.get('/verify', verifyUser, verify)

export default router;