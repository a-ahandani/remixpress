import { Typography } from "@mui/material";
import { domToReact } from "html-react-parser";

import type { BlockquoteProps } from "./types";
export default function Blockquote({ node }: BlockquoteProps) {
  const { children } = node;
  return (
    <Typography
      sx={{
        p: 4,
        my: 2,
        backgroundColor: ({ palette }) => palette.grey[100],
        "& cite": {
          fontSize: "0.8rem",
          fontStyle: "normal",
          marginLeft: 3,
        },
      }}
    >
      {domToReact(children)}
    </Typography>
  );
}
