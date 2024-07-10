import { Router } from 'express';
import { UserRoute } from '../modules/user/user.route';
import { CategoryRouter } from '../modules/category/category.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/user',
    route: UserRoute,
  },
  {
    path: '/category',
    route: CategoryRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
