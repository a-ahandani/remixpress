import { Box } from "@mui/material";
import dayjs from "dayjs";
import Body from "~/components/Content/components/Body";
import Title from "~/components/Content/components/Title";

import type { ExcerptProps } from "./types";
export default function Excerpt({
  slug,
  title,
  excerpt,
  commentCount,
  date,
  dateGmt,
  ...rest
}: ExcerptProps) {
  var day = dayjs(date);
  return (
    <Box sx={{ mt: 4, ml: 3 }}>
      <Title to={slug}>{title}</Title>
      <Body>{excerpt}</Body>
      {commentCount && `comments: ${commentCount}`}
      date:{day.format("DD/MM/YYYY")}
    </Box>
  );
}
