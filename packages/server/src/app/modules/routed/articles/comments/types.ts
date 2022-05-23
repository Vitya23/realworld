export interface DbComment {
  commentId: number;
  articleId: number;
  createdAt: number;
  updatedAt: number;
  body: string;
  username: string;
  bio: string;
  image: string;
  following: 1 | 0;
}
