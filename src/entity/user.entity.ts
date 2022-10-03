import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  OneToMany
} from 'typeorm';
import { Post } from './post.entity';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  user_id: string;

  @Column()
  user_nickname: string;

  @Column()
  user_email: string;

  @Column()
  user_password: string;

  @Column({ nullable: true })
  user_photo: string;

  @Column({ nullable: true })
  user_short_bio: string;

  @CreateDateColumn()
  user_timestamp_create: Date;

  @UpdateDateColumn()
  user_timestamp_update: Date;

  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];
}
