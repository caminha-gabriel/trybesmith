import connection from '../models/connection';
import UsersModel from '../models/users.model';
import User from '../interfaces/user.interface';

export default class UserService {
  public model: UsersModel;

  constructor() {
    this.model = new UsersModel(connection);
  }

  public async create(user: User): Promise<void> {
    return this.model.create(user);
  }
}