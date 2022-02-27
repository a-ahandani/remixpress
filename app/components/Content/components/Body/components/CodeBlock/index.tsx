import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { xonokai } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { domToReact } from "html-react-parser";

import type { CodeBlockProps } from "./types";
export default function CodeBlock({ node }: CodeBlockProps) {
  const language = node?.attribs?.lang;
  return (
    <SyntaxHighlighter
      style={xonokai}
      showLineNumbers
      showInlineLineNumbers
      wrapLines
      language={language}
    >
      {domToReact(node.children)}
    </SyntaxHighlighter>
  );
}
