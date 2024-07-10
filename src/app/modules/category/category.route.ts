import express from 'express';
import auth from '../../middlewares/auth';
import { CategoryController } from './category.controller';

const router = express.Router();

router.post(
  '/',
  auth('SUPER_ADMIN', 'ADMIN'),
  CategoryController.createCategory,
);

router.get('/', CategoryController.getAllCategory);

router.get('/:id', CategoryController.getSingleCategory);

router.delete(
  '/:id',
  auth('ADMIN', 'SUPER_ADMIN'),
  CategoryController.deleteCategory,
);

router.put(
  '/:id',
  auth('ADMIN', 'SUPER_ADMIN'),
  CategoryController.updateCategory,
);

export const CategoryRouter = router;
