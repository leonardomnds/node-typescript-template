import { Request, Response, NextFunction } from 'express';

import { BadRequest } from './BadRequest';

export const ErrorHandler = (
  error: Error,
  request: Request,
  response: Response,
  _: NextFunction,
): Response => {
  if (error instanceof BadRequest) {
    return response.status(error.statusCode).json({
      message: error.message,
    });
  }

  return response.status(500).json({
    message: 'Internal Server Error',
  });
};
