import express from 'express';
import healthCheckController from '../controllers/HealthCheckControllers';

const router = express.Router();

router.get('/ping', healthCheckController.pong);

module.exports = router;
