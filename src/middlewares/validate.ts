import { NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';

export const validate = (schema:any) => (req:Request, res:Response, next:NextFunction) => {
  try {
    schema.parse({
      params: req.params,
      query: req.query,
      body: req.body,
    });

    next();
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json({
        status: 'fail',
        errors: error.errors,
      });
    }
    next(error);
  }
};