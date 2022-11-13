import {
  Entity,
  PrimaryGeneratedColumn,
  BaseEntity,
  JoinTable,
  ManyToOne, Column
} from "typeorm";
import { Comment } from './comment.entity';
import { Post } from './post.entity';
@Entity()
export class CommentPost extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  commentpost_id: string;

  @Column({ type : 'uuid', default: null, nullable: true })
  comment_id: string;

  @Column({ type : 'uuid', default: null, nullable: true })
  post_id: string;

  /* @ManyToOne(() => Comment, (comment) => comment.commentPost, {
    cascade: true,
    eager: true
  })
  @JoinTable()
  comment: Comment[];

  @ManyToOne(() => Post, (post) => post.commentPost, {
    cascade: true,
    eager: true
  })
  @JoinTable()
  post: Post[];*/
}
