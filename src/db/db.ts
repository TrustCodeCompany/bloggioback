import { Category } from 'src/entity/category.entity';
import { Comment } from 'src/entity/comment.entity';
import { CommentPost } from 'src/entity/commentpost.entity';
import { Post } from 'src/entity/post.entity';
import { DataSource } from 'typeorm';
import { User } from '../entity/user.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'bloggio',
  synchronize: true,
  logging: true,
  entities: [User, Post, Comment, Category, CommentPost],
  subscribers: [],
  migrations: []
});
