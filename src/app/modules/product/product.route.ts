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

router.delete(
  '/:id',
  auth('ADMIN', 'SUPER_ADMIN'),
  ProductController.deleteProduct,
);

router.put(
  '/:id',
  auth('ADMIN', 'SUPER_ADMIN'),
  ProductController.updateProduct,
);

export const ProductRouter = router;
