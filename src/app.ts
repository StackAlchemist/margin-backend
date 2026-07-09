import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

import routes from './routes';
import { errorHandler } from './middleware/errorHandler';

const app = express();

app.use(helmet());

app.use(cors({
    origin: true,
    credentials: true,
}))

app.use(morgan('dev')); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api", routes);
app.use(errorHandler)

export default app;