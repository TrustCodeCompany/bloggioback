import { Request, Response } from 'express';
import { CommentPostRepository } from '../repository/commentpost.repository';

const commentPostRepository = new CommentPostRepository();

export const createCommentPost = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    commentPostRepository
      .save(req.body)
      .then((post) => {
        res.send(post).status(200);
      })
      .catch((err: string) => res.status(500).send(`Error: ${err}`));
  } catch (error) {
    res.status(500).json(JSON.parse(`{"error":"${error.message}"}`));
  }
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const getAllCommentPost = async (req: Request, res: Response) => {
  try {
    const posts = await commentPostRepository.findAll();
    if (posts.length === 0) {
      res.status(204).send('post not found');
    }
    res.send(posts);
  } catch (error) {
    if (error instanceof Error)
      res.status(500).send({ message: error.message });
  }
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const getCommentPost = async (req: Request, res: Response) => {
  await commentPostRepository
    .findById(req.params.id)
    .then((post) => {
      if (post == null) {
        res.status(204).send('post not found');
      } else {
        res.send(post);
      }
    })
    .catch((err: string) => res.status(500).json(`Error: ${err}`));
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const getCommentPostByPostId = async (req: Request, res: Response) => {
  await commentPostRepository
    .findByIdPost(req.params.id)
    .then((post) => {
      if (post == null) {
        res.status(204).send('post not found');
      } else {
        res.send(post);
      }
    })
    .catch((err: string) => res.status(500).json(`Error: ${err}`));
};

export const updateCommentPost = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    res.send('updated');
  } catch (error) {
    if (error instanceof Error)
      res.status(500).send({ message: error.message });
  }
};

export const deleteCommentPost = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    commentPostRepository
      .delete(req.params.id)
      .then((postDelete) => {
        res.status(200).send(postDelete);
      })
      .catch((err: string) => res.status(500).json(`Error: ${err}`));
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send({ message: error.message });
    }
  }
};
