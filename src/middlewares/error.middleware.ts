import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

function errorMiddleware(err: Error, _req: Request, res: Response, next: NextFunction) {
  const { message } = err;
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message });

  next();
}

export default errorMiddleware;