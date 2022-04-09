import { Box, Drawer, IconButton } from "@mui/material";
import type { MenuProps } from "./types";
import MenuIcon from "@mui/icons-material/Menu";
import Navigation from "~/components/Menu/components/Navigation";
import useLayout from "~/components/Layout/hooks/use-layout-context";

export default function Menu({ width }: MenuProps) {
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
            width: width,
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
          right: (width - 48) / 2,
          top: 24,
        }}
      >
        <IconButton size="large" aria-label="Menu" onClick={handleToggleMenu}>
          <MenuIcon />
        </IconButton>
      </Box>
      <Box>
        <Navigation />
      </Box>
    </Drawer>
  );
}
