/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable space-before-function-paren */
import { Comment } from 'src/entity/comment.entity';
import { BaseCommentRepository } from './base.comment.repository';

export class CommentRepository implements BaseCommentRepository {
  async findAll(): Promise<Comment[] | []> {
    return await Comment.find();
  }

  async findById(id: string): Promise<Comment | null> {
    return await Comment.findOneBy({
      comment_id: id
    });
  }

  async update(newComment: Comment): Promise<Comment> {
    return new Comment();
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
}
