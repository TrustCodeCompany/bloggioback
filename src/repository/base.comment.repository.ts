import { Comment } from '../entity/comment.entity';

export interface BaseCommentRepository {
  findAll: () => Promise<Comment[] | Error | []>;
  findById: (id: string) => Promise<Comment | Error | null>;
  save: (newComment: Comment) => Promise<Comment | Error | null>;
  update: (newComment: Comment) => Promise<Comment | Error | null>;
  delete: (id: string) => Promise<Comment | Error | null>;
}
