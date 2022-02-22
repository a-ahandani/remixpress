import { Box } from "@mui/material";
import { Link } from "remix";

import Body from "~/components/Posts/components/Body";
import Title from "~/components/Posts/components/Title";

import type { ExcerptProps } from "./types";
export default function Excerpt({
  slug,
  title,
  excerpt,
  ...rest
}: ExcerptProps) {
  return (
    <Box {...rest}>
      <Title to={slug}>{title}</Title>
      <Body>{excerpt}</Body>
    </Box>
  );
}
