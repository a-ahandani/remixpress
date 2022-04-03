import type { Node } from "~/types/posts";
import type { TypographyProps } from "@mui/material";

export type DateProps = Pick<Node, "date"> &
  TypographyProps & {
    format?: string;
  };
