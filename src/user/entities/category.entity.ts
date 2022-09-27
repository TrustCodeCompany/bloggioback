import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity
} from 'typeorm';

@Entity()
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  category_id: string;

  @Column()
  category_description: string;

  @Column({ type: 'number', default: 1 })
  category_state: number;

  @CreateDateColumn()
  category_timestamp_create: Date;

  @UpdateDateColumn()
  category_timestamp_update: Date;
}
