import { Grid, Box, Drawer } from "@mui/material";
import type { MenuProps } from "./types";
import { Squeeze as Hamburger } from "hamburger-react";
import Navigation from "~/components/Menu/components/Navigation";
import useLayout from "~/components/Layout/hooks/use-layout-context";

export default function Menu({ ...rest }: MenuProps) {
  const { layoutState, setLayoutState } = useLayout();
  const { isMenuOpen } = layoutState;

  function handleToggleMenu() {
    setLayoutState({
      ...layoutState,
      isMenuOpen: !isMenuOpen,
    });
  }
  return (
    <Drawer
      sx={{
        width: "100%",
        "& .MuiDrawer-paper": {
          overflow: "hidden",
          ...(isMenuOpen && {
            width: "100%",
            transition: (theme) =>
              theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.standard,
              }),
          }),
          ...(!isMenuOpen && {
            width: 90,
            transition: (theme) =>
              theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.shortest,
              }),
          }),
        },
      }}
      variant="permanent"
      anchor="right"
      open={isMenuOpen}
    >
      <Box
        sx={{
          position: "fixed",
          right: 24,
          top: 24,
        }}
      >
        <Hamburger toggled={isMenuOpen} toggle={handleToggleMenu} size={33} />
      </Box>
      <Box>
        <Navigation />
      </Box>
    </Drawer>
  );
}
