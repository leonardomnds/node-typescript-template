import cors from 'cors';
import express from 'express';
import 'express-async-errors';

import { ErrorHandler } from './errors';
import { ApplicationRoutes } from './routes';

const Server = express();

Server.use(cors());

Server.use(express.json());

Server.use(ApplicationRoutes);

Server.use(ErrorHandler);

Server.listen(process.env.PORT || 9991);
