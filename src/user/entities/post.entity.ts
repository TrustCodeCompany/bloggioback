import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  JoinColumn,
  OneToOne
} from 'typeorm';
import { Category } from './category.entity';
import { Comment } from './comment.entity';
import { User } from './user.entity';

@Entity()
export class Post extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  post_id: string;

  @Column()
  post_content: string;

  @Column({ type: 'number', default: 1 })
  post_state: number;

  @Column({ nullable: true })
  post_priority: number;

  @CreateDateColumn()
  post_timestamp_create: Date;

  @UpdateDateColumn()
  post_timestamp_update: Date;

  @OneToOne(() => User)
  @JoinColumn()
  user_id: User;

  @OneToOne(() => Category)
  @JoinColumn()
  category_id: Category;

  @OneToOne(() => Comment)
  @JoinColumn()
  comment_id: Comment;
}
