import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import generateToken from '../helpers/generateToken';
import UsersService from '../services/users.service';

export default class UsersController {
  constructor(private usersService = new UsersService()) { }

  public create = async (req: Request, res: Response) => {
    const user = req.body;

    await this.usersService.create(user);
    const tokenObj = generateToken(user);

    return res.status(StatusCodes.CREATED).json(tokenObj);
  };
}