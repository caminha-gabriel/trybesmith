import connection from '../models/connection';
import OrdersModel from '../models/orders.model';
import Order from '../interfaces/order.interface';

export default class OrdersService {
  public model: OrdersModel;

  constructor() {
    this.model = new OrdersModel(connection);
  }

  public async getAll(): Promise<Order[]> {
    const orders = await this.model.getAll();
    return orders;
  }
}