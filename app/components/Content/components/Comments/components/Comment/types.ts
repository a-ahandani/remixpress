import { BoxProps } from "@mui/system";
import { ReactNode } from "react";
import type { Comment } from "~/types";

export type CommentProps = Comment &
  BoxProps & {
    date?: string;
    children?: ReactNode;
    to?: string;
    authorImageSize?: number;
  };
