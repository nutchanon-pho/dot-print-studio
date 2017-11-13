import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import helmet from 'helmet';
import * as setupController from './controllers/setupControllers';
import * as authController from './controllers/AuthControllers';

const app = express();
const port = process.env.PORT || 3000;

// need to seperate middleware here
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());

// need to seperate routes here
setupController.setAdmin(app);
authController.init(app);

app.get('/ping', (req, res) => {
    res.send('pong');
});

app.listen(port);
