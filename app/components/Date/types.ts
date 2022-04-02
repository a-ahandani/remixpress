import type { Post } from "~/types/posts";
import type { TypographyProps } from "@mui/material";

export type DateProps = Pick<Post, "date"> &
  TypographyProps & {
    format?: string;
  };
