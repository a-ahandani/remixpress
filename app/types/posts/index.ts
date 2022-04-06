import { CreateCommentInput, User } from "~/types/wordpressTypes";

export type Query = {
  limit?: number | null;
  after?: string | null;
  before?: string | null;
};

export type ListConnection<T> = {
  nodes: T[];
};
export type Connection<T> = {
  node: T;
};

export type Commenter = {
  id: string;
  name: string;
};
export type Comment = {
  content?: string;
  date: string;
  id?: string;
  databaseId?: number;
  author: Connection<Commenter>;
  replies?: ListConnection<Comment>;
};
export type Comments = ListConnection<Comment>;

export type CreateComment = CreateCommentInput;

export type Author = User;

export type NodeTypes = "Post" | "Category" | "Tag";

export type Taxonomy = { uri?: string; name?: string };
export type Taxonomies = ListConnection<Taxonomy>;

export type Post = {
  uri: string;
  id?: string;
  slug: string;
  commentCount: number;
  excerpt?: string;
  date?: string;
  content?: string;
  categories?: Taxonomies;
  tags?: Taxonomies;
  databaseId: number;
  title?: string;
  comments?: Comments;
  author?: Connection<Author>;
};
export type Posts = ListConnection<Post>;

export type Node = {
  __typename?: NodeTypes;
  name?: string;
  description?: string;
  posts?: Posts;
} & Post;
