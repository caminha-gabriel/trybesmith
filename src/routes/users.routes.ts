import { Router } from 'express';
import UsersController from '../controllers/users.controller';
import usersValidation from '../middlewares/user.middleware';

const router = Router();

const usersController = new UsersController();

router.post('/users', usersValidation, usersController.create);

export default router;