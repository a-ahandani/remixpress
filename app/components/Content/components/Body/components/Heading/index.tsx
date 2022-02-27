import { Typography } from "@mui/material";
import { domToReact } from "html-react-parser";
import { BLOCK_KEYS } from "~/components/Content/components/Body";

import type { ImageProps } from "./types";
export default function Image({ node }: ImageProps) {
  const { children, name } = node;

  const BLOCK_VARIANTS: {
    [key: string]: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body1";
  } = {
    [BLOCK_KEYS.H1]: "h1",
    [BLOCK_KEYS.H2]: "h2",
    [BLOCK_KEYS.H3]: "h3",
    [BLOCK_KEYS.H4]: "h4",
    [BLOCK_KEYS.H5]: "h5",
    [BLOCK_KEYS.H6]: "h6",
    [BLOCK_KEYS.P]: "body1",
  };

  return (
    <Typography variant={BLOCK_VARIANTS[name]}>
      {domToReact(children)}
    </Typography>
  );
}
