import express from 'express';
import { UserController } from './user.controller';
import { upload } from '../../utils/helper';

const router = express.Router();

router.post('/sign-up', upload.single('photo'), UserController.createUser);

router.put('/login', UserController.loginUser);

export const UserRoute = router;
