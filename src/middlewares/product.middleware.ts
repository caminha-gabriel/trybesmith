import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import Product from '../interfaces/product.interface';

const properties = ['name', 'amount'];

function validateProperties(product: Product): [boolean, string | null] {
  for (let i = 0; i < properties.length; i += 1) {
    if (!Object.prototype.hasOwnProperty.call(product, properties[i])) {
      return [false, properties[i]];
    }
  }

  return [true, null];
}

function validateValues(product: Product): [boolean, string | null] {
  const productEntries = Object.entries(product);

  for (let i = 0; i < productEntries.length; i += 1) {
    const [property, value] = productEntries[i];
    if (!value) {
      return [false, property];
    }
  }

  return [true, null];
}

function productValidation(req: Request, res: Response, next: NextFunction) {
  const product: Product = req.body;

  let [valid, property] = validateProperties(product);
  if (!valid) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: `Field "${property}" is required`,
    });
  }

  [valid, property] = validateValues(product);
  if (!valid) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: `Field "${property}" can't be blank or null`,
    });
  }

  next();
}

export default productValidation;