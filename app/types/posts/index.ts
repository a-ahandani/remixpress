import {
  Post as PostDto,
  PostToCommentConnection,
  CommentToCommentConnection,
  Comment as CommentDto,
  CreateCommentInput,
  Category as CategoryDto,
} from "~/types/wordpressTypes";
import { Maybe } from "~/types/utils";

export type Post = Partial<
  Pick<
    PostDto,
    | "slug"
    | "id"
    | "commentCount"
    | "excerpt"
    | "title"
    | "date"
    | "comments"
    | "content"
  >
> & {
  uri: string;
  categories?: { nodes: Taxonomies };
  tags?: { nodes: Taxonomies };
  databaseId: number;
};

export type Node = {
  uri: string;
  title?: string;
  name?: string;
  posts?: { nodes: Post[] };
} & Post;

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

export type Taxonomy = Pick<CategoryDto, "uri" | "name">;
export type Taxonomies = Taxonomy[];
