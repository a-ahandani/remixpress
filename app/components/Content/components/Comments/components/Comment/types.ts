import { ReactNode } from "react";
import { SxProps } from "@mui/system";
import type { Comment } from "~/types/posts";

export type CommentProps = Comment & {
  date?: string;
  children?: ReactNode;
  sx?: SxProps;
  to?: string;
  authorImageSize?: number;
};
