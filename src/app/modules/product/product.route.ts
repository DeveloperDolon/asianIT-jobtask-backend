import express from 'express';
import auth from '../../middlewares/auth';
import { ProductController } from './product.controller';

const router = express.Router();

router.post('/', auth('ADMIN', 'SUPER_ADMIN'), ProductController.createProduct);

router.get('/', ProductController.getAllProduct);

export const ProductRouter = router;
