import type { Comments } from "~/types/posts";

export type CommentsProps = {
  comments?: Comments;
  child?: boolean;
  databaseId: number;
};
