import { Request, Response } from "express";
import { CommentRepository } from "../repository/comment.repository";

const commentRepository = new CommentRepository();

export const createComment = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    commentRepository
      .save(req.body)
      .then((comment) => {
        res.send(comment).status(200);
      })
      .catch((err: string) => res.status(500).send({ message: err }));
  } catch (error) {
    res.status(500).json(JSON.parse(`{"error":"${error.message}"}`));
  }
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const getAllComments = async (req: Request, res: Response) => {
  try {
    const comments = await commentRepository.findAll();
    if (comments.length === 0) {
      res.status(204).send("comments not found");
    }
    res.send(comments).status(200);
  } catch (error) {
    if (error instanceof Error)
      res.status(500).send({ message: error.message });
  }
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const getCommentById = async (req: Request, res: Response) => {
  await commentRepository
    .findById(req.params.id)
    .then((post) => {
      if (post == null) {
        res.status(204).send("post not found");
      } else {
        res.send(post);
      }
    })
    .catch((err: string) => res.status(500).json(`Error: ${err}`));
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const getCommentsByPostId = async (req: Request, res: Response) => {
  await commentRepository
    .getCommentsByPostId(req.params.id)
    .then((post) => {
      if (post == null) {
        res.status(204).send({ message: "post not found" });
      } else {
        res.send(post);
      }
    })
    .catch((err: string) => res.status(500).json(`Error: ${err}`));
};

export const updateComment = async (req: Request, res: Response) => {
  await commentRepository
    .update(req)
    .then((comment) => {
      res.send({ message: "update ok" }).status(200);
    })
    .catch((err: string) => res.status(500).json(`Error: ${err}`));
};

export const deleteComment = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    commentRepository
      .delete(req.params.id)
      .then((comment) => {
        res.status(200).send({message: 'delete successfully'});
      })
      .catch((err: string) => res.status(500).json({ message: err }));
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send({ message: error.message });
    }
  }
};
