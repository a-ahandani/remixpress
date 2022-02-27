import { CardMedia, CardContent, Card, Typography } from "@mui/material";
import type { ImageProps } from "./types";
export default function Image({ node, children }: ImageProps) {
  const { attribs } = node;
  const { src, alt } = attribs;
  return (
    <Card raised>
      <CardMedia component="img" image={src} alt={alt} />
      {alt && (
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {alt}
          </Typography>
        </CardContent>
      )}
    </Card>
  );
}
