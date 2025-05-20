import express from 'express';
import { login, logout, register } from '../controllers/authController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.get('/me', protect, (req, res) => {
    res.json(req.user)
})


export default router;