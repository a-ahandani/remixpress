import { BoxProps } from "@mui/system";
import type { Comments, CommentStatuses } from "~/types";

export type CommentsProps = BoxProps & {
  comments?: Comments;
  child?: boolean;
  databaseId: number;
  commentStatus?: CommentStatuses;
};
