import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { xonokai } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Typography, Card, CardHeader } from "@mui/material";
import type { Element } from "html-react-parser";
import { domToReact } from "html-react-parser";
import type { CodeBlockProps } from "./types";

export enum HIGHLIGHTER_ATTRIBUTES {
  LINE_NUMBERS = "line-numbers",
}
export default function CodeBlock({ node }: CodeBlockProps) {
  const { attribs, children, parent } = node;
  const { name, attribs: parentAttribs } = parent as Element;
  const { lang, class: classNames } = attribs;
  const render = domToReact(children);

  const showLineNumbers = classNames
    ?.split(" ")
    ?.includes(HIGHLIGHTER_ATTRIBUTES.LINE_NUMBERS);

  return name == "pre" ? (
    <Card
      sx={{
        "& .linenumber": {
          minWidth: "auto!important",
        },
      }}
    >
      {parentAttribs?.title && (
        <CardHeader
          titleTypographyProps={{
            variant: "caption",
            sx: { display: "flex", alignItems: "center" },
          }}
          title={
            <>
              <IntegrationInstructionsIcon
                sx={{ mr: 1 }}
                color={"action"}
                fontSize={"small"}
              />
              {parentAttribs?.title}
            </>
          }
        />
      )}
      <SyntaxHighlighter
        customStyle={{
          margin: 0,
          borderRadius: 0,
          border: "none",
        }}
        style={xonokai}
        showLineNumbers={showLineNumbers}
        showInlineLineNumbers={true}
        wrapLines
        language={lang}
      >
        {render}
      </SyntaxHighlighter>
    </Card>
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
