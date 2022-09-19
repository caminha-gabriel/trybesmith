import express from 'express';
import errorMiddleware from './middlewares/error.middleware';
import ProductsRoute from './routes/products.routes';
import UsersRoute from './routes/users.routes';

const app = express();

app.use(express.json());

app.use(ProductsRoute);
app.use(UsersRoute);

app.use(errorMiddleware);
export default app;