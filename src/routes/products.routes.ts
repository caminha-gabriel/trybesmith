import { Router } from 'express';
import ProductsController from '../controllers/products.controller';
import productValidation from '../middlewares/product.middleware';

const router = Router();

const productsController = new ProductsController();

router.get('/products', productsController.getAll);
router.post('/products', productValidation, productsController.create);

export default router;