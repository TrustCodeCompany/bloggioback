import { Comment } from '../entity/comment.entity';
import { UpdateResult } from "typeorm";

export interface BaseCommentRepository {
  findAll: () => Promise<Comment[] | Error | []>;
  findById: (id: string) => Promise<Comment | Error | null>;
  getCommentsByPostId: (id: string) => Promise<Comment[] | Error | []>;
  save: (newComment: Comment) => Promise<Comment | Error | null>;
  update: (req: any) => Promise<UpdateResult>;
  delete: (id: string) => Promise<Comment | Error | null>;
}
