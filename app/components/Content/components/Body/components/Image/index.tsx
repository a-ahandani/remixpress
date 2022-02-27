import { CardMedia, Card } from "@mui/material";
import type { ImageProps } from "./types";
export default function Image({ node }: ImageProps) {
  const { attribs } = node;
  const { src, alt } = attribs;
  return (
    <Card raised>
      <CardMedia component="img" image={src} alt={alt} />
    </Card>
  );
}
