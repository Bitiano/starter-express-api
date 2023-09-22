import { NextFunction, Response } from 'express';
import { CustomError } from '../utils';

export const errorHandler = (err: Error, _: any, res: Response, next: NextFunction) => {
  let statusCode: number;

  if (err instanceof CustomError) {
    statusCode = err.statusCode;
    delete err.stack;
  } else {
    statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  }

  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? 'error' : err.stack,
  });

  next();
};
