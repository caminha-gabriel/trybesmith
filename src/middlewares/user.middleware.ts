import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import User from '../interfaces/user.interface';

const properties = ['username', 'classe', 'level', 'password'];

function validateProperties(user: User): [boolean, string | null] {
  for (let i = 0; i < properties.length; i += 1) {
    if (!Object.prototype.hasOwnProperty.call(user, properties[i])) {
      return [false, properties[i]];
    }
  }

  return [true, null];
}

function validateValues(user: User): [boolean, string | null] {
  const userEntries = Object.entries(user);

  for (let i = 0; i < userEntries.length; i += 1) {
    const [property, value] = userEntries[i];
    if (!value) {
      return [false, property];
    }
  }

  return [true, null];
}

function userValidation(req: Request, res: Response, next: NextFunction) {
  const user: User = req.body;

  let [valid, property] = validateProperties(user);
  if (!valid) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: `Field "${property}" is required`,
    });
  }

  [valid, property] = validateValues(user);
  if (!valid) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: `Field "${property}" can't be blank or null`,
    });
  }

  next();
}

export default userValidation;