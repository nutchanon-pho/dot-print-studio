import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import helmet from 'helmet';
import * as authController from './controllers/AuthControllers';
import * as healthCheckController from './controllers/HealthCheckControllers';


const app = express();
const port = process.env.PORT || 3000;

// need to seperate middleware here
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());


// need to seperate routes here
authController.init(app);
healthCheckController.init(app);

app.listen(port);
