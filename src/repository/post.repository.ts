/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable space-before-function-paren */
import { Category } from 'src/entity/category.entity';
import { Comment } from 'src/entity/comment.entity';
import { User } from 'src/entity/user.entity';
import toNewPostEntry from 'src/utils/utils';
import { Post } from '../entity/post.entity';
import { BasePostRepository } from './base.post.repository';

export class PostRepository implements BasePostRepository {
  async findAll(): Promise<Post[] | []> {
    return await Post.find();
  }

  async findById(id: string): Promise<Post | null> {
    return await Post.findOneBy({
      post_id: id
    });
  }

  async update(newPost: Post): Promise<Post> {
    return new Post();
  }

  async delete(id: string): Promise<Post> {
    return new Post();
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async save(newPost: any): Promise<Post | Error> {
    const objPost = new Post();
    const objUser = new User();
    const objComment = new Comment();
    const objCategory = new Category();

    try {
      toNewPostEntry(newPost);
    } catch (e: any) {
      console.log('repository errror -> ', e.message);
      return new Error(e.message);
    }

    objUser.user_id = newPost.user_id;
    objComment.comment_id = newPost.comment_id;
    objCategory.category_id = newPost.category_id;

    objPost.post_content = newPost.post_content;
    objPost.post_state = newPost.post_state;
    objPost.post_priority = newPost.post_priority;
    objPost.user = objUser;
    objPost.category = objCategory;
    objPost.comment = objComment;
    return await Post.save(objPost).catch((err: string) => {
      console.log('error -> ', err);
      return new Error('gaaaaaaaaaaaaaaa');
    });
  }
}
