import { ReactNode } from "react";
import { SyntaxHighlighterProps } from "react-syntax-highlighter";
import type { BlockComponentBaseProps } from "~/components/Posts/components/Body";

export type CodeBlockProps = BlockComponentBaseProps &
  SyntaxHighlighterProps & {
    children: ReactNode;
  };
