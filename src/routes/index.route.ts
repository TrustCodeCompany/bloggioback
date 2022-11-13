/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express';
import {
  createPost,
  getAllPost,
  getPost,
  deletePost,
  updatePost
} from '../controller/post.controller';
import { getUsers, createUser } from '../controller/user.controller';
import { createComment, getAllComments, getCommentById, getCommentsByPostId, deleteComment, updateComment } from '../controller/comment.controller';

const router = Router();

router.get('/users', getUsers);
router.post('/user', createUser);
router.get('/posts', getAllPost);
router.get('/post/:id', getPost);
router.post('/post', createPost);
router.put('/post/:id', updatePost);
router.delete('/post/:id', deletePost);
router.post('/comment',createComment);
router.get('/comment', getAllComments);
router.get('/comment/:id', getCommentById);
router.get('/comment/post/:id', getCommentsByPostId);
router.put('/comment/:id', updateComment);
router.delete('/comment/:id', deleteComment);

export default router;
