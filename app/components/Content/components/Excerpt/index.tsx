import { Link as RmxLink } from "remix";
import { Box, IconButton, Badge } from "@mui/material";
import { Link } from "@mui/material";
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
  hideCommentsButton,
  TitleProps,
}: ExcerptProps) {
  return (
    <Box sx={{ mt: 4 }}>
      <Date gutterBottom date={date} sx={{ display: "flex", width: "100%" }} />
      <Title {...TitleProps} to={uri}>
        {title}
      </Title>

      <Taxonomies data={tags?.nodes} />

      <Body>{excerpt}</Body>

      {!hideCommentsButton && (
        <Link component={RmxLink} to={`${uri}#comments`}>
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
        </Link>
      )}

      <Taxonomies
        ChipProps={{ variant: "outlined", sx: { borderRadius: 0 } }}
        data={categories?.nodes}
      />
    </Box>
  );
}
