import { Request, Response } from 'express';
import toNewPostEntry from 'src/utils/utils';
import { PostRepository } from '../repository/post.repository';

const postRepository = new PostRepository();

export const createPost = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    toNewPostEntry(req.body);
    postRepository
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
export const getAllPost = async (req: Request, res: Response) => {
  try {
    const posts = await postRepository.findAll();
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
export const getPost = async (req: Request, res: Response) => {
  await postRepository
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

export const updatePost = async (
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

export const deletePost = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    postRepository
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
