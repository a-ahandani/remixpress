import { Card } from "@mui/material";
import type { MediaProps } from "./types";
import { domToReact } from "html-react-parser";

export default function Media({ node }: MediaProps) {
  const children = node.children;

  return (
    <Card
      sx={{
        my: 4,
        "& iframe, & video": {
          width: "100%",
          display: "block",
        },
      }}
    >
      {domToReact(children)}
    </Card>
  );
}
