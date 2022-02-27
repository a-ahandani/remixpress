import { Typography } from "@mui/material";
import { Link } from "remix";

import type { TitleProps } from "./types";
export default function Title({ children, to, sx, ...rest }: TitleProps) {
  return (
    <Typography
      {...(to && { component: Link, to })}
      variant="h4"
      {...rest}
      sx={{
        textDecoration: "none",
        color: (theme) => theme.palette.common.black,
        pb: 0,
        ...sx,
      }}
    >
      {children}
    </Typography>
  );
}
