import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { xonokai } from "react-syntax-highlighter/dist/cjs/styles/prism";

import type { CodeBlockProps } from "./types";
export default function CodeBlock({ language, children }: CodeBlockProps) {
  console.log("language", language);
  return (
    <SyntaxHighlighter
      style={xonokai}
      showLineNumbers
      showInlineLineNumbers
      wrapLines
      language={language}
    >
      {children}
    </SyntaxHighlighter>
  );
}