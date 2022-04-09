import { Typography, Box } from "@mui/material";
import Date from "~/components/Date";
import Body from "~/components/Content/components/Body";

import type { CommentProps } from "./types";
export default function Comment({ date, author, children }: CommentProps) {
  const authorName = author?.node?.name;
  return (
    <Box className="comment-box">
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h6">{authorName}</Typography>
          <Date date={date} />
        </Box>
      </Box>
      <Body
        sx={{
          p: ({ typography }) => {
            return typography.body2;
          },
        }}
      >
        {children}
      </Body>
    </Box>
  );
}
