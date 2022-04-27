import { Typography } from "@mui/material";
import { Link } from "@remix-run/react";

import type { TitleProps } from "./types";
export default function Title({ children, to, sx, ...rest }: TitleProps) {
  return (
    <Typography
      component="h1"
      {...(to && { component: Link, prefetch: "intent", to })}
      variant="h1"
      {...rest}
      sx={{
        width: "100%",
        textDecoration: "none",
        display: "flex",
        color: (theme) => theme.palette.common.black,
        pb: 0,
        ...sx,
      }}
    >
      {children}
    </Typography>
  );
}
