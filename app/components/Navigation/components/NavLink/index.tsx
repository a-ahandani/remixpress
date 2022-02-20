import { Link as RmxLink } from "remix";
import { Link } from "@mui/material";

import type { NavLinkProps } from "./types";
export default function NavLink({ to, children, ...rest }: NavLinkProps) {
  return (
    <Link
      component={RmxLink}
      variant="h4"
      to={to}
      color="text.primary"
      sx={{
        my: 1,
        mx: 1.5,
        textDecoration: "none",
        display: "block",
        pb: 1,
        pl: 6,
      }}
      {...rest}
    >
      {children}
    </Link>
  );
}
