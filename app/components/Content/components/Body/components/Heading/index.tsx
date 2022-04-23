import { Typography } from "@mui/material";
import { domToReact } from "html-react-parser";
import { kebabCase } from "lodash";
import { BLOCK_KEYS } from "~/components/Content/components/Body";

import type { HeadingProps } from "./types";
export default function Heading({
  node,
  disableId = ["p", "h6", "h5"],
}: HeadingProps) {
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
  const content = domToReact(children) as string;
  const id = !disableId.includes(name) ? kebabCase(content) : undefined;
  return (
    <Typography id={id} variant={BLOCK_VARIANTS[name]}>
      {content}
    </Typography>
  );
}
