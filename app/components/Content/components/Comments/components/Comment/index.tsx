import { Typography, Box } from "@mui/material";
import Date from "~/components/Date";
import Avatar from "~/components/Avatar";
import Body from "~/components/Content/components/Body";

import type { CommentProps } from "./types";
export default function Comments({
  authorImageSize = 60,
  date,
  author,
  children,
}: CommentProps) {
  const authorName = author?.node?.name || "";
  const authorImage = author?.node?.url || "";

  return (
    <Box className="comment-box" sx={{ borderTop: "1px solid red" }}>
      <Box sx={{ display: "flex", alignItems: "center", p: 1 }}>
        <Avatar name={authorName} image={authorImage} size={authorImageSize} />
        <Box sx={{ display: "flex", flexDirection: "column", p: 1 }}>
          <Typography sx={{ fontWeight: "bold" }} variant="body2">
            {authorName}
          </Typography>
          <Date date={date} />
        </Box>
      </Box>
      <Body>{children}</Body>
    </Box>
  );
}
