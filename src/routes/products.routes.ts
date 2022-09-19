import { Router } from 'express';
import ProductController from '../controllers/products.controller';
import productValidation from '../middlewares/product.middleware';

const router = Router();

const productController = new ProductController();

router.post('/products', productValidation, productController.create);

export default router;