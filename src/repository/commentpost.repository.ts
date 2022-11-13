/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable space-before-function-paren */
import { Category } from 'src/entity/category.entity';
import { Post } from 'src/entity/post.entity';
import { User } from 'src/entity/user.entity';
import { CommentPost } from '../entity/commentpost.entity';
import { BaseCommentPostRepository } from './base.commentpost.repository';
import { Comment } from "../entity/comment.entity";

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

  async findCommentsByIdPost(id: string): Promise<Comment[] | []> {
    return await Comment.createQueryBuilder('Comment')
      .leftJoinAndSelect(CommentPost, 'commentPost', 'commentPost.comment_id = Comment.comment_id')
      .leftJoinAndSelect(Post, 'post', 'commentPost.post_id = post.post_id')
      .where('post.post_id = :id ', { id })
      .getMany();
  }

  async delete(id: string): Promise<CommentPost> {
    const postToDelete = new CommentPost();
    postToDelete.commentpost_id = id;
    return await CommentPost.remove(postToDelete);
  }

  async deleteAllCommentByIdPost(postId: string): Promise<void> {
    await CommentPost.createQueryBuilder()
      .delete()
      .from('CommentPost')
      .where('post_id = :postId', { postId })
      .execute();
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async save(post: any): Promise<void> {
    const commentPost = new CommentPost();

    commentPost.post_id = post.post_id;

    await CommentPost.save(commentPost);
    /* await CommentPost.createQueryBuilder()
      .insert()
      .into('CommentPost')
      .values({ postPostId: postId })
      .execute();*/
  }
}
