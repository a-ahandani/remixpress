import { ReactNode } from "react";
import { useTransition } from "remix";

import Logo from "~/components/Logo";
import LayoutProvider from "~/components/Layout/components/LayoutProvider";
import { Container, AppBar, Toolbar, Box, LinearProgress } from "@mui/material";
import Menu from "~/components/Menu";

export default function Layout({ children }: { children: ReactNode }) {
  const { location, state, submission, type } = useTransition();

  console.log("render", location, state, submission, type);
  const isLoading = state === "loading";
  return (
    <LayoutProvider defaultLayoutState={{ isMenuOpen: false }}>
      <Box>
        <Menu />
        <Box sx={{ width: "calc(100vw - 100px)" }}>
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
          {isLoading && (
            <Box sx={{ height: 5, mb: "-5px" }}>
              <LinearProgress color="inherit" />
            </Box>
          )}

          <Container maxWidth="md">
            <Box sx={{ my: 4 }}>{children}</Box>
          </Container>
        </Box>
      </Box>
    </LayoutProvider>
  );
}
