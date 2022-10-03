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
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  category_id: string;

  @Column()
  category_description: string;

  @Column({ type: 'int', default: 1 })
  category_state: number;

  @CreateDateColumn()
  category_timestamp_create: Date;

  @UpdateDateColumn()
  category_timestamp_update: Date;

  @OneToMany(() => Post, (post) => post.category)
  posts: Post[];
}
