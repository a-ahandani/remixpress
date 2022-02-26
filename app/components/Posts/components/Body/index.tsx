import { Typography } from "@mui/material";
import CodeBlock from "~/components/Posts/components/CodeBlock";
import parse, { domToReact, Element, DOMNode } from "html-react-parser";
import type { BodyProps } from "./types";

export default function Body({ body, children, ...rest }: BodyProps) {
  const content = body || children || "";

  const getCode = (node: Element) => {
    if (
      node instanceof Element &&
      node.children?.[0] instanceof Element &&
      node.children?.[0]?.name === "code"
    ) {
      return node.children[0].children;
    } else {
      return node.children;
    }
  };

  const getLanguage = (node: Element) => node?.attribs?.lang;
  const replaceCode = (node: DOMNode) => {
    if (node instanceof Element && node?.name === "code") {
      return (
        node.children.length > 0 && (
          <CodeBlock language={getLanguage(node)}>
            {domToReact(getCode(node))}
          </CodeBlock>
        )
      );
    }
  };

  return (
    <Typography
      variant="body1"
      {...rest}
      sx={{ "& .more-link": { display: "none" } }}
    >
      {parse(content, { replace: replaceCode })}
    </Typography>
  );
}
