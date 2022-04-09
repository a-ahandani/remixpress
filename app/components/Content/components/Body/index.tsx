import { ReactElement, FC } from "react";

import { Box } from "@mui/material";
import CodeBlock from "~/components/Content/components/Body/components/CodeBlock";
import Blockquote from "~/components/Content/components/Body/components/Blockquote";
import Image from "~/components/Content/components/Body/components/Image";
import Media from "~/components/Content/components/Body/components/Media";
import Heading from "~/components/Content/components/Body/components/Heading";
import parse, { Element, DOMNode } from "html-react-parser";
import type { BodyProps } from "./types";

export type BlockComponentBaseProps = {
  node: Element;
};

export type BlockComponentBaseTypes = (
  props: BlockComponentBaseProps
) => ReactElement;

export enum BLOCK_KEYS {
  CODE = "code",
  BLOCKQUOTE = "blockquote",
  IMAGE = "img",
  FIGURE = "figure",
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
  H4 = "h4",
  H5 = "h5",
  H6 = "h6",
  P = "p",
}

const BLOCK_COMPONENTS: {
  [key: string]: BlockComponentBaseTypes;
} = {
  [BLOCK_KEYS.CODE]: CodeBlock,
  [BLOCK_KEYS.BLOCKQUOTE]: Blockquote,
  [BLOCK_KEYS.IMAGE]: Image,
  [BLOCK_KEYS.FIGURE]: Media,
  [BLOCK_KEYS.H1]: Heading,
  [BLOCK_KEYS.H2]: Heading,
  [BLOCK_KEYS.H3]: Heading,
  [BLOCK_KEYS.H4]: Heading,
  [BLOCK_KEYS.H5]: Heading,
  [BLOCK_KEYS.H6]: Heading,
  // [BLOCK_KEYS.P]: Heading,
};

const Body: FC<BodyProps> = ({ body, children, sx, ...rest }) => {
  const content = body || children || "";

  const replaceCode = (node: DOMNode) => {
    if (
      node instanceof Element &&
      Object.keys(BLOCK_COMPONENTS).includes(node.name)
    ) {
      const RenderComponent = BLOCK_COMPONENTS[node.name];
      return <RenderComponent node={node} />;
    }
  };

  return (
    <Box
      {...rest}
      sx={{
        "& a": ({ palette }) => ({
          textDecoration: "none",
          color: palette.primary.main,
        }),
        "& .more-link": {
          display: "none",
        },
        ...sx,
      }}
    >
      {parse(String(content), { replace: replaceCode })}
    </Box>
  );
};

export default Body;
