import 'reflect-metadata';
import 'express-async-errors';
import express, { NextFunction, Request, Response } from 'express';

import { AppError } from './errors/AppError';
import { routes } from './routes';

import './shared/container';

type IApError = Error | AppError;

const api = express();

api.use(express.json());

api.use(routes);

api.use(
  (
    error: IApError,
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    if (error instanceof AppError) {
      console.log(JSON.stringify(error.message, null, 2));
      return response.status(error.status).json({
        message: error.message,
      });
    }

    return response.status(500).json({
      message: 'Internal Error',
    });
  }
);

api.listen(3333, () => {
  console.log('running on port 3333');
});
