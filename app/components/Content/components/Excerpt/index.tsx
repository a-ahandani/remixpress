import { Box, Typography } from "@mui/material";
import Body from "~/components/Content/components/Body";
import Title from "~/components/Content/components/Title";
import Date from "~/components/Date";

import type { ExcerptProps } from "./types";
export default function Excerpt({
  slug,
  title,
  excerpt,
  commentCount,
  date,
}: ExcerptProps) {
  return (
    <Box sx={{ mt: 4, ml: 3 }}>
      <Date date={date} />
      <Title to={slug}>{title}</Title>
      {excerpt && <Body>{excerpt}</Body>}
      {commentCount && `comments: ${commentCount}`}
    </Box>
  );
}
