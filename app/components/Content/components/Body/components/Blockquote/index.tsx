import { Typography } from "@mui/material";
import { domToReact } from "html-react-parser";

import type { BlockquoteProps } from "./types";
export default function Blockquote({ node }: BlockquoteProps) {
  return (
    <Typography
      sx={{
        p: 4,
        my: 2,
        backgroundColor: ({ palette }) => palette.grey[100],
      }}
    >
      {domToReact(node.children)}
    </Typography>
  );
}
