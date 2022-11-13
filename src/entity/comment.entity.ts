import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  OneToMany, ManyToOne, JoinTable
} from "typeorm";
import { CommentPost } from './commentpost.entity';
import { Post } from "./post.entity";
@Entity()
export class Comment extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  comment_id: string;

  @Column({ nullable: true })
  comment_likes: number;

  @Column()
  comment_content: string;

  @Column({ type: 'int', default: 1 })
  category_state: number;

  @Column({ type: 'uuid', nullable: true })
  comment_id_reply: string;

  @CreateDateColumn()
  comment_timestamp_create: Date;

  @UpdateDateColumn()
  comment_timestamp_update: Date;

  @ManyToOne(() => Post, (post) => post.comment)
  @JoinTable()
  post: Post[];

  /* @OneToMany(() => CommentPost, (commentPost) => commentPost.comment)
  commentPost: CommentPost;*/
}
