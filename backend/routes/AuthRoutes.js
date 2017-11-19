import express from 'express';
import AuthController from '../controllers/AuthControllers';

const router = express.Router();

router.post('/login', AuthController.login);
router.post('/register', AuthController.register);

module.exports = router;
