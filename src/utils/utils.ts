/* eslint-disable @typescript-eslint/no-explicit-any */
import { newPostEntry } from 'src/types/types';

const isString = (string: string): boolean => {
  return typeof string === 'string';
};

const parseContent = (contentFromRequest: any): string => {
  if (!isString(contentFromRequest)) {
    throw new Error('the property post_content is incorrect, should be string');
  }
  return contentFromRequest;
};

const parseUser = (userFromRequest: any): string => {
  if (!isString(userFromRequest)) {
    throw new Error('Incorrect uuid user');
  }
  return userFromRequest;
};

const parseComment = (commentFromRequest: any): string => {
  if (!isString(commentFromRequest)) {
    throw new Error('Incorrect uuid comment');
  }
  return commentFromRequest;
};

const toNewPostEntry = (object: any): newPostEntry => {
  const newPost: newPostEntry = {
    post_content: parseContent(object.post_content),
    user_id: parseUser(object.user_id),
    category_id: object.cateogry_id,
    comment_id: parseComment(object.comment_id)
  };
  return newPost;
};

export default toNewPostEntry;
