import express from 'express';
import AuthController from '../controllers/AuthControllers';

const router = express.Router();

router.post('/login', AuthController.login, AuthController.generateToken, AuthController.respond);
router.post('/register', AuthController.register);

module.exports = router;
