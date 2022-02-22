import { Link as RmxLink } from "remix";
import { Typography, Link } from "@mui/material";
import useLayout from "~/components/Layout/hooks/use-layout-context";

export default function Logo({ ...rest }) {
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
        AHANDANI.
      </Typography>
      <Typography sx={{ fontWeight: "light" }} variant="caption">
        AHAMAD ESMAEILZADEH AHANDANI
      </Typography>
    </Link>
  );
}
