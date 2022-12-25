/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable space-before-function-paren */
import { Category } from 'src/entity/category.entity';
import { User } from 'src/entity/user.entity';
import { Post } from '../entity/post.entity';
import { BasePostRepository } from './base.post.repository';
import { CommentPostRepository } from './commentpost.repository';
import { CommentRepository } from './comment.repository';
import { Comment } from "../entity/comment.entity";
import { UpdateResult } from "typeorm";

export class PostRepository implements BasePostRepository {
  async findAll(): Promise<Post[] | []> {
    return await Post.find();
  }

  async findById(id: string): Promise<Post | null> {
    return await Post.findOneBy({
      post_id: id
    });
  }

  async update (req: any): Promise<UpdateResult> {
    const postId = req.params.id;
    const newPost = req.body;
    return await Post
      .createQueryBuilder()
      .update(Post)
      .set({ ...newPost })
      .where('post_id = :postId', {
        postId
      })
      .execute();
  }

  deletePostAndComments(id: string): void {
    const commentPostRepo = new CommentPostRepository();
    const commentRepo = new CommentRepository();
    const commentsToDeleteByPost: any = [];
    // obtener todos los comentarios del post
    commentPostRepo
      .findCommentsByIdPost(id)
      .then((response) => {
        response.forEach((element: Comment) =>
          commentsToDeleteByPost.push(element)
        );
        // eliminar tabla detalle
        commentPostRepo
          .deleteAllCommentByIdPost(id)
          .then((item) => {
            console.log('se elimino el post de la tabla detalle');
            // eliminar tabla comentarios
            commentsToDeleteByPost.forEach((item) => {
              void commentRepo.delete(item.comment_id).then((res) => {
                console.log('se elimino de la tabla comentarios -> ', res);
                // eliminar post
                this.delete(id)
                  .then((res) => {
                    console.log(`se elimino el post con id -> ${id}`);
                  })
                  .catch((err: string) => {
                    console.error(`Error al eliminar el post ${id}`, err);
                  });
              });
            });
          })
          .catch((err: string) => {
            console.error(`Error al eliminar el post ${id}`, err);
          });
      })
      .catch((err: string) => {
        console.log('error -> ', err);
      });
  }

  async delete(id: string): Promise<Post> {
    const postToDelete = new Post();
    postToDelete.post_id = id;
    return await Post.remove(postToDelete);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async save(newPost: any): Promise<Post | Error> {
    const objPost = new Post();
    const objUser = new User();
    const objCategory = new Category();

    objUser.user_id = newPost.user_id;
    objCategory.category_id = newPost.category_id;

    objPost.post_title = newPost.post_title;
    objPost.post_description = newPost.post_description;
    objPost.post_content = newPost.post_content;
    objPost.post_state = newPost.post_state;
    objPost.post_priority = newPost.post_priority;
    objPost.user = objUser;
    objPost.category = objCategory;
    return await Post.save(objPost).catch((err: string) => {
      console.log('error -> ', err);
      return new Error('error al guardar post');
    });

    const commentPostRepo = new CommentPostRepository();

    commentPostRepo
      .save(newPost)
      .then((res) => {
        console.log('se guardo la informacion en la tabla detalle coment post');
      })
      .catch((err: string) => {
        console.log('error -> ', err);
      });
  }

  async saveWithCommentPost(newPost: any): Promise<void> {
    const objPost = new Post();
    const objUser = new User();
    const objCategory = new Category();

    objUser.user_id = newPost.user_id;
    objCategory.category_id = newPost.category_id;

    objPost.post_content = newPost.post_content;
    objPost.post_state = newPost.post_state;
    objPost.post_priority = newPost.post_priority;
    objPost.user = objUser;
    objPost.category = objCategory;
    await Post.save(objPost)
      .then((response: Post) => {
        console.log('se guardo el post ', response);
        const commentPostRepo = new CommentPostRepository();
        commentPostRepo
          .save(response)
          .then((res) => {
            console.log(
              'se guardo la informacion en la tabla detalle coment post ',
              res
            );
          })
          .catch((err: string) => {
            console.log('error -> ', err);
          });
      })
      .catch((err: string) => {
        console.log('error -> ', err);
        return new Error('gaaaaaaaaaaaaaaa');
      });
  }
}
