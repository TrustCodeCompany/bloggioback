/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express';
import { createPost, getAllPost, getPost } from '../controller/post.controller';
import { getUsers, createUser } from '../controller/user.controller';

const router = Router();

router.get('/users', getUsers);
router.post('/user', createUser);
router.get('/posts', getAllPost);
router.get('/post/:id', getPost);
router.post('/post', createPost);

export default router;
