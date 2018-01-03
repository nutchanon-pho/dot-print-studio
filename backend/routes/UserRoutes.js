import express from 'express';
import UserController from '../controllers/UserControllers';

const router = express.Router();

router.post('/', UserController.getUser);

module.exports = router;
