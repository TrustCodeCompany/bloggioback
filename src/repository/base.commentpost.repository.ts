/* eslint-disable @typescript-eslint/no-explicit-any */
import { CommentPost } from '../entity/commentpost.entity';
import { Comment } from "../entity/comment.entity";
import { Post } from "../entity/post.entity";

export interface BaseCommentPostRepository {
  findAll: () => Promise<CommentPost[] | Error | []>;
  findById: (id: string) => Promise<CommentPost | Error | null>;
  findCommentsByIdPost: (id: string) => Promise<Comment[] | Error | []>;
  save: (newComment: CommentPost) => Promise<void>;
  saveCommentsInPost: (newComment: Comment, actualPost: Post) => Promise<void>;
  update: (newComment: CommentPost) => Promise<CommentPost | Error | null>;
  delete: (id: string) => Promise<CommentPost | Error | null>;
  deleteAllCommentByIdPost: (id: string) => any;
}
