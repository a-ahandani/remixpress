import { ReactNode, ReactElement } from "react";

import { Typography } from "@mui/material";
import CodeBlock from "~/components/Posts/components/Body/components/CodeBlock";
import Blockquote from "~/components/Posts/components/Body/components/Blockquote";
import parse, { domToReact, Element, DOMNode } from "html-react-parser";
import type { BodyProps } from "./types";

export type BlockComponentBaseProps = {
  node: Element;
  children: ReactNode;
};

export type BlockComponentBaseTypes = (
  props: BlockComponentBaseProps
) => ReactElement;

enum BLOCK_KEYS {
  CODE = "code",
  BLOCKQUOTE = "blockquote",
}

const BLOCK_COMPONENTS: {
  [key: string]: BlockComponentBaseTypes;
} = {
  [BLOCK_KEYS.CODE]: CodeBlock,
  [BLOCK_KEYS.BLOCKQUOTE]: Blockquote,
};

export default function Body({ body, children, ...rest }: BodyProps) {
  const content = body || children || "";

  const getContent = (node: Element) => {
    if (
      node instanceof Element &&
      node.children?.[0] instanceof Element &&
      Object.keys(BLOCK_COMPONENTS).includes(node.name)
    ) {
      return node.children[0].children;
    } else {
      return node.children;
    }
  };

  const replaceCode = (node: DOMNode) => {
    if (
      node instanceof Element &&
      Object.keys(BLOCK_COMPONENTS).includes(node.name)
    ) {
      const RenderComponent = BLOCK_COMPONENTS[node.name];

      return (
        node.children.length > 0 && (
          <RenderComponent node={node}>
            {domToReact(getContent(node))}
          </RenderComponent>
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
