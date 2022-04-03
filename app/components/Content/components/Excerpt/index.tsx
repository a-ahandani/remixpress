import { Box, IconButton, Badge } from "@mui/material";
import Body from "~/components/Content/components/Body";
import Title from "~/components/Content/components/Title";
import Taxonomies from "~/components/Content/components/Taxonomies";
import ModeCommentIcon from "@mui/icons-material/ModeComment";

import Date from "~/components/Date";

import type { ExcerptProps } from "./types";
export default function Excerpt({
  uri,
  title,
  excerpt,
  commentCount,
  date,
  categories,
  tags,
}: ExcerptProps) {
  return (
    <Box sx={{ mt: 4, ml: 3 }}>
      <Date gutterBottom date={date} sx={{ display: "flex", width: "100%" }} />
      <Title to={uri}>{title}</Title>

      {tags?.nodes && <Taxonomies data={tags.nodes} />}

      <Body>{excerpt}</Body>

      <IconButton sx={{ mr: 1 }}>
        <Badge
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          badgeContent={commentCount}
          color="secondary"
        >
          <ModeCommentIcon />
        </Badge>
      </IconButton>
      {categories?.nodes && (
        <Taxonomies
          ChipProps={{ variant: "outlined", sx: { borderRadius: 0 } }}
          data={categories.nodes}
        />
      )}
    </Box>
  );
}
