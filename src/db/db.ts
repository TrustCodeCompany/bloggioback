import { Category } from 'src/user/entities/category.entity';
import { Comment } from 'src/user/entities/comment.entity';
import { Post } from 'src/user/entities/post.entity';
import { DataSource } from 'typeorm';
import { User } from '../user/entities/user.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'bloggio',
  synchronize: true,
  logging: true,
  entities: [User, Post, Comment, Category],
  subscribers: [],
  migrations: []
});
