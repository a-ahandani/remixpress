import { Typography } from "@mui/material";
import type { BlockquoteProps } from "./types";
export default function Blockquote({ node, children }: BlockquoteProps) {
  return (
    <Typography
      sx={{
        p: 4,
        my: 2,
        backgroundColor: ({ palette }) => palette.grey[100],
      }}
    >
      {children}
    </Typography>
  );
}
