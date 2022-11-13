// export type newPostEntry = Pick<
//   Post,
//   'post_content' | 'user' | 'category' | 'comment'
// >;

export interface newPostEntry {
  post_content: string;
  user_id: string;
  category_id: string;
}
