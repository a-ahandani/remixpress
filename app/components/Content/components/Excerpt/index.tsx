import { Box } from "@mui/material";
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
      <Date gutterBottom date={date} sx={{ display: "flex", width: "100%" }} />
      <Title to={slug}>{title}</Title>
      <Body>{excerpt}</Body>
      {commentCount && `comments: ${commentCount}`}
    </Box>
  );
}
