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
import { User } from './user.entity';

@Entity()
export class Comment extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  comment_id: string;

  @Column({ nullable: true })
  comment_likes: number;

  @Column()
  comment_content: string;

  @Column({ type: 'number', default: 1 })
  category_state: number;

  @Column({ nullable: true })
  comment_id_reply: string;

  @CreateDateColumn()
  comment_timestamp_create: Date;

  @UpdateDateColumn()
  comment_timestamp_update: Date;

  @OneToOne(() => User)
  @JoinColumn()
  user_id: User;
}
