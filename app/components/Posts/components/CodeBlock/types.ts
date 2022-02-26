import { ReactNode } from "react";
import { SyntaxHighlighterProps } from "react-syntax-highlighter";

export type CodeBlockProps = SyntaxHighlighterProps & {
  children: ReactNode;
};
