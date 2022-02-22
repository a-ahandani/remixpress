import { Typography } from "@mui/material";

import type { BodyProps } from "./types";
export default function Body({ body, children, ...rest }: BodyProps) {
  const content = body || children || "";
  return (
    <Typography
      variant="body1"
      {...rest}
      sx={{ "& .more-link": { display: "none" } }}
    >
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </Typography>
  );
}
