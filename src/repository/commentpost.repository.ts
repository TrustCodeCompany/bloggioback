/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable space-before-function-paren */
import { Post } from 'src/entity/post.entity';
import { CommentPost } from '../entity/commentpost.entity';
import { BaseCommentPostRepository } from './base.commentpost.repository';

export class CommentPostRepository implements BaseCommentPostRepository {
  async findAll(): Promise<CommentPost[] | []> {
    return await CommentPost.find();
  }

  async findById(id: string): Promise<CommentPost | null> {
    return await CommentPost.findOneBy({
      commentpost_id: id
    });
  }

  async update(newPost: CommentPost): Promise<CommentPost> {
    return new CommentPost();
  }

  async findByIdPost(id: string): Promise<CommentPost[] | []> {
    const post = new Post();
    post.post_id = id;
    return await CommentPost.createQueryBuilder('CommentPost')
      .leftJoinAndSelect('CommentPost.post', 'commentPost')
      .leftJoinAndSelect('CommentPost.comment', 'comment')
      .where('commentPost.post_id = :id ', { id })
      .getMany();
  }

  async delete(id: string): Promise<CommentPost> {
    const postToDelete = new CommentPost();
    postToDelete.commentpost_id = id;
    return await CommentPost.remove(postToDelete);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async save(newPost: any): Promise<CommentPost | Error> {
    return new Error();
  }
}
