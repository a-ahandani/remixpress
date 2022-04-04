import { Link as RmxLink } from "remix";
import { Typography, Link, Skeleton, Box } from "@mui/material";

import useLayout from "~/components/Layout/hooks/use-layout-context";
import type { LogoProps } from "./types";

export default function Logo({
  description,
  title,
  loading,
  ...rest
}: LogoProps) {
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
      {...rest}
      onClick={handleCloseMenu}
      component={RmxLink}
      to={"/"}
      color="text.primary"
      sx={{
        textDecoration: "none",
        ...rest?.sx,
      }}
    >
      <Typography sx={{ fontWeight: "bold" }} variant="h5">
        {loading ? <Skeleton width={140} /> : title}
      </Typography>
      <Typography sx={{ fontWeight: "light" }} variant="caption">
        {loading ? <Skeleton width={220} /> : description}
      </Typography>
    </Link>
  );
}
