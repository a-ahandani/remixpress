import type { Comments, CommentStatuses } from "~/types/posts";

export type CommentsProps = {
  comments?: Comments;
  child?: boolean;
  databaseId: number;
  commentStatus?: CommentStatuses;
};
