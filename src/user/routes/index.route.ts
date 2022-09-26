/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express';
import { getUsers, createUser } from '../controller/user.controller';

const router = Router();

router.get('/users', getUsers);
router.post('/user', createUser);

export default router;
