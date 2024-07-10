import express from 'express';
import auth from '../../middlewares/auth';
import { ProductController } from './product.controller';

const router = express.Router();

router.post('/', auth('ADMIN', 'SUPER_ADMIN'), ProductController.createProduct);

router.get('/', ProductController.getAllProduct);

router.get('/:id', ProductController.getSingleProduct);

router.get(
  '/userProducts/:userId',
  auth('ADMIN', 'SUPER_ADMIN'),
  ProductController.getUsersProduct,
);

export const ProductRouter = router;
