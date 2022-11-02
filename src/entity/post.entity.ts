import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  ManyToOne
  // OneToMany
} from 'typeorm';
import { Category } from './category.entity';
import { CommentPost } from './commentpost.entity';
// import { Comment } from './comment.entity';
// import { Category } from './category.entity';
// import { Comment } from './comment.entity';
import { User } from './user.entity';

@Entity()
export class Post extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  post_id: string;

  @Column()
  post_content: string;

  @Column({ type: 'int', default: 1 })
  post_state: number;

  @Column({ type: 'int', default: 1 })
  post_priority: number;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  post_timestamp_create: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  post_timestamp_update: Date;

  @ManyToOne(() => User, (user) => user.posts, {
    cascade: true,
    eager: true
  })
  user: User;

  @ManyToOne(() => Category, (category) => category.posts, {
    cascade: true,
    eager: true
  })
  category: Category;

  @ManyToOne(() => CommentPost, (commentPost) => commentPost.post)
  commentPost: CommentPost;
}
