import { Post } from '../entity/post.entity';

export interface BasePostRepository {
  findAll: () => Promise<Post[] | Error | []>;
  findById: (id: string) => Promise<Post | Error | null>;
  save: (newPost: Post) => Promise<Post | Error | null>;
  update: (newPost: Post) => Promise<Post | Error | null>;
  delete: (id: string) => Promise<Post | Error | null>;
}
