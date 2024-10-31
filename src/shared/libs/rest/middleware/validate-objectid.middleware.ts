import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { Types } from 'mongoose';
import { HttpError } from '../errors/index.js';
import { IMiddleware } from './middleware.interface.js';

export class ValidateObjectIdMiddleware implements IMiddleware {
  constructor(private readonly param: string) {}

  public execute({ params }: Request, _res: Response, next: NextFunction): void {
    const objectId = params[this.param];

    if (Types.ObjectId.isValid(objectId)) {
      return next();
    }

    throw new HttpError(StatusCodes.BAD_REQUEST, `${objectId} is not valid ObjectId`, 'ValidateObjectIdMiddleware');
  }
}
