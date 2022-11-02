import { CommentPost } from '../entity/commentpost.entity';

export interface BaseCommentPostRepository {
  findAll: () => Promise<CommentPost[] | Error | []>;
  findById: (id: string) => Promise<CommentPost | Error | null>;
  findByIdPost: (id: string) => Promise<CommentPost[] | Error | []>;
  save: (newComment: CommentPost) => Promise<CommentPost | Error | null>;
  update: (newComment: CommentPost) => Promise<CommentPost | Error | null>;
  delete: (id: string) => Promise<CommentPost | Error | null>;
}
