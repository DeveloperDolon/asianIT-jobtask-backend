import express from 'express';
import auth from '../../middlewares/auth';
import { CategoryController } from './category.controller';

const router = express.Router();

router.post(
  '/',
  auth('SUPER_ADMIN', 'ADMIN'),
  CategoryController.createCategory,
);

export const CategoryRouter = router;
