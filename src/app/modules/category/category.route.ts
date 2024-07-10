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

export const CategoryRouter = router;
