/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable space-before-function-paren */
import { Comment } from 'src/entity/comment.entity';
import { BaseCommentRepository } from './base.comment.repository';
import { Post } from "../entity/post.entity";
import { UpdateResult } from "typeorm";

export class CommentRepository implements BaseCommentRepository {
  async findAll(): Promise<Comment[] | []> {
    return await Comment.find();
  }

  async findById(id: string): Promise<Comment | null> {
    return await Comment.findOneBy({
      comment_id: id
    });
  }

  async update (req: any): Promise<UpdateResult> {
    const commentId = req.params.id;
    const newComment = req.body;
    return await Comment
      .createQueryBuilder()
      .update(Comment)
      .set({ ...newComment })
      .where('comment_id = :commentId', {
        commentId
      })
      .execute();
  }

  async delete(id: string): Promise<Comment> {
    const commentToDelete = new Comment();
    commentToDelete.comment_id = id;
    return await Comment.remove(commentToDelete);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async save(newComment: any): Promise<Comment | Error> {
    return await Comment.save(newComment);
  }

  async getCommentsByPostId (id: string): Promise<Comment[] | Error | []> {
    return await Comment.createQueryBuilder('comment')
      .leftJoinAndSelect(Post, 'post', 'comment.post = post.post_id')
      .where('post.post_id = :id ', { id })
      .getMany();
  }


}
