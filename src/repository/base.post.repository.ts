import { Post } from '../entity/post.entity';
import { UpdateResult } from "typeorm";

export interface BasePostRepository {
  findAll: () => Promise<Post[] | Error | []>;
  findById: (id: string) => Promise<Post | Error | null>;
  save: (newPost: Post) => Promise<Post | Error | null>;
  saveWithCommentPost: (newPost: Post) => Promise<void>;
  update: (req: any) => Promise<UpdateResult>;
  delete: (id: string) => Promise<Post | Error | null>;
}
