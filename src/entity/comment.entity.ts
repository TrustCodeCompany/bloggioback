import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  // JoinColumn,
  // OneToOne,
  OneToMany
} from 'typeorm';
import { Post } from './post.entity';
// import { User } from './user.entity';

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

  @Column({ nullable: true })
  comment_id_reply: string;

  @CreateDateColumn()
  comment_timestamp_create: Date;

  @UpdateDateColumn()
  comment_timestamp_update: Date;

  // @OneToOne(() => User)
  // @JoinColumn()
  // user_id: User;

  @OneToMany(() => Post, (post) => post.comment)
  posts: Post[];
}
