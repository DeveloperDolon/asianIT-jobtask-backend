import express from 'express';
import { UserController } from './user.controller';
import { upload } from '../../utils/helper';
import auth from '../../middlewares/auth';

const router = express.Router();

router.post('/sign-up', upload.single('photo'), UserController.createUser);

router.put('/login', UserController.loginUser);

router.get('/', auth('SUPER_ADMIN'), UserController.getAllUser);

export const UserRoute = router;
