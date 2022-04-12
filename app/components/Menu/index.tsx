import { Box, Drawer, IconButton } from "@mui/material";
import type { MenuProps } from "./types";
import MenuIcon from "@mui/icons-material/Menu";
import Navigation from "~/components/Menu/components/Navigation";
import useLayout from "~/components/Layout/hooks/use-layout-context";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";

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
        display: "flex",
        height: "100%",
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
          display: "flex",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            p: 2,
          }}
        >
          <IconButton size="large" aria-label="Menu" onClick={handleToggleMenu}>
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "center",
              flex: 1,
              mb: 3,
            }}
          >
            <IconButton size="small">
              <LinkedInIcon />
            </IconButton>
            <IconButton size="small">
              <TwitterIcon />
            </IconButton>
            <IconButton size="small">
              <EmailIcon />
            </IconButton>
          </Box>
        </Box>
        <Navigation />
      </Box>
    </Drawer>
  );
}
