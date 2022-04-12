import { Link as RmxLink } from "remix";
import { Link } from "@mui/material";
import useLayout from "~/components/Layout/hooks/use-layout-context";

import type { NavLinkProps } from "./types";
export default function NavLink({ to, children, ...rest }: NavLinkProps) {
  const { layoutState, setLayoutState } = useLayout();
  const { isMenuOpen } = layoutState;

  function handleCloseMenu() {
    if (isMenuOpen)
      setLayoutState({
        ...layoutState,
        isMenuOpen: false,
      });
  }

  return (
    <Link
      component={RmxLink}
      onClick={handleCloseMenu}
      variant="h5"
      to={to}
      color="text.primary"
      {...rest}
      sx={{
        my: { xs: 1, sm: 1 },
        mx: 1.5,
        textDecoration: "none",
        display: "block",
        pb: 1,
        px: 6,
        fontSize: (theme) => ({
          xs: theme.typography.h6.fontSize,
          sm: theme.typography.h5.fontSize,
        }),
        ...rest?.sx,
      }}
    >
      {children}
    </Link>
  );
}
