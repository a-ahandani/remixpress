import {
  Post as PostDto,
  PostToCommentConnection,
  CommentToCommentConnection,
  Comment as CommentDto,
  CreateCommentInput,
} from "~/types/wordpressTypes";
import { Maybe } from "~/types/utils";

export type Post = {
  slug: string;
  title: string;
} & PostDto;

export type Query = {
  limit?: number | null;
  after?: string | null;
  before?: string | null;
};

export type Comments =
  | Maybe<PostToCommentConnection>
  | Maybe<CommentToCommentConnection>;

export type Comment = CommentDto;
export type CreateComment = CreateCommentInput;
