import { Pool } from 'mysql2/promise';
import Order from '../interfaces/order.interface';

export default class OrdersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Order[]> {
    const result = await this.connection.execute(
      `SELECT ord.id, ord.userId, JSON_ARRAYAGG(pro.id) as productsIds
      FROM Trybesmith.Orders AS ord
      JOIN Trybesmith.Products as pro
      ON ord.id = pro.orderId
      GROUP BY pro.orderId
      ORDER BY ord.userId ASC;`,
    );
    
    const [rows] = result;    
    return rows as Order[];
  }
}
