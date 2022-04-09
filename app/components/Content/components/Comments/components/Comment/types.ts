import { ReactNode } from "react";
import type { Comment } from "~/types/posts";

export type CommentProps = Comment & {
  date?: string;
  children?: ReactNode;
  to?: string;
  authorImageSize?: number;
};
