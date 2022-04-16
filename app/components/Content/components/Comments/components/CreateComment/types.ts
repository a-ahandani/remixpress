import type { Commenter, CreateComment } from "~/types";
import type { BoxProps } from "@mui/material";
export type CreateCommentProps = BoxProps &
  CreateComment & {
    open?: boolean;
    parentAuthor?: Commenter;
  };
