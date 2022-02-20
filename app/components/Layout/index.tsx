import { ReactNode, useState } from "react";
import { Squeeze as Hamburger } from "hamburger-react";
import Logo from "~/components/Logo";
import Navigation from "~/components/Navigation";
import { Container, AppBar, Toolbar, Box, Drawer } from "@mui/material";

export default function Layout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <Box>
      <Drawer
        sx={{
          width: "100%",
          ...(open && {
            "& .MuiDrawer-paper": {
              width: "100%",
              transition: (theme) =>
                theme.transitions.create("width", {
                  easing: theme.transitions.easing.sharp,
                  duration: theme.transitions.duration.standard,
                }),
            },
          }),
          ...(!open && {
            "& .MuiDrawer-paper": {
              width: 90,
              transition: (theme) =>
                theme.transitions.create("width", {
                  easing: theme.transitions.easing.sharp,
                  duration: theme.transitions.duration.shortest,
                }),
            },
          }),
        }}
        variant="permanent"
        anchor="right"
        open={open}
      >
        <Box
          sx={{
            position: "fixed",
            right: 24,
            top: 24,
          }}
        >
          <Hamburger toggled={open} toggle={setOpen} size={33} />
        </Box>
        <Box>
          <Navigation isOpen={open} />
        </Box>
      </Drawer>
      <Box>
        <AppBar position="static" color="transparent" elevation={0}>
          <Toolbar
            sx={{
              flexWrap: "wrap",
              py: 2,
              px: 6,
              borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
            }}
          >
            <Box sx={{ p: 2, fontWeight: "bold", flexGrow: 1 }}>
              <Logo />
            </Box>
          </Toolbar>
        </AppBar>
        <Container sx={{}}>
          <Box sx={{ my: 4 }}>{children}</Box>
        </Container>
      </Box>
    </Box>
  );
}
