import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import helmet from 'helmet';
import AuthRoutes from './routes/AuthRoutes';
import HeathCheckRoutes from './routes/HealthCheckRoutes';

const app = express();
const port = process.env.PORT || 3000;

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());

// routes
app.use('/healthCheck', HeathCheckRoutes);
app.use('/auth', AuthRoutes);

app.listen(port);
