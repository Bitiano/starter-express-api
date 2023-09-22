import 'dotenv/config';
import express, { json, urlencoded } from 'express';
import cors from 'cors';

import routes from './routes';
import { errorHandler, notFound } from './middlewares';

const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

app.use('/api/v1', routes);

app.use(notFound)
app.use(errorHandler)

export default app;
