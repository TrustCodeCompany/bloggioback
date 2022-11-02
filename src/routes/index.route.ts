/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express';
import {
  createPost,
  getAllPost,
  getPost,
  deletePost
} from '../controller/post.controller';
import { getUsers, createUser } from '../controller/user.controller';
import {
  getAllCommentPost,
  getCommentPost,
  getCommentPostByPostId
} from '../controller/commentpost.controller';

const router = Router();

router.get('/users', getUsers);
router.post('/user', createUser);
router.get('/posts', getAllPost);
router.get('/post/:id', getPost);
router.post('/post', createPost);
router.delete('/post/:id', deletePost);
router.get('/comment-post', getAllCommentPost);
router.get('/comment-post/:id', getCommentPost);
router.get('/comment-post/post/:id', getCommentPostByPostId);

export default router;
