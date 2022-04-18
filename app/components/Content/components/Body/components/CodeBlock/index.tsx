import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { xonokai } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Typography } from "@mui/material";
import { domToReact, Element } from "html-react-parser";

import type { CodeBlockProps } from "./types";
export default function CodeBlock({ node }: CodeBlockProps) {
  const { attribs, children, parent } = node;
  const { name } = parent as Element;
  const { lang } = attribs;
  const render = domToReact(children);

  return name == "pre" ? (
    <SyntaxHighlighter
      style={xonokai}
      showLineNumbers
      showInlineLineNumbers
      wrapLines
      language={lang}
    >
      {render}
    </SyntaxHighlighter>
  ) : (
    <Typography
      variant="body1"
      component={"code"}
      paragraph={false}
      sx={{
        backgroundColor: (theme) => theme.palette.primary.main,
        color: (theme) => theme.palette.common.white,
        px: 0.8,
        borderRadius: 1,
        a: {
          color: (theme) => theme.palette.common.white,
        },
      }}
    >
      {render}
    </Typography>
  );
}
