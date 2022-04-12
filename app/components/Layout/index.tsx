import { ReactNode } from "react";
import { useTransition } from "remix";
import Logo from "~/components/Logo";
import LayoutProvider from "~/components/Layout/components/LayoutProvider";
import { Container, AppBar, Toolbar, Box, LinearProgress } from "@mui/material";
import Menu from "~/components/Menu";

const MENU_WIDTH = 80;

export default function Layout({ children }: { children: ReactNode }) {
  const { state } = useTransition();
  const isLoading = state === "loading";

  return (
    <LayoutProvider defaultLayoutState={{ isMenuOpen: false }}>
      <Box>
        <Menu width={MENU_WIDTH} />
        <Box sx={{ width: `calc(100vw - ${MENU_WIDTH}px)` }}>
          <AppBar position="static" color="transparent" elevation={0}>
            <Toolbar
              sx={{
                flexWrap: "wrap",
                height: 122,
                py: 2,
                px: 6,
              }}
            >
              <Box sx={{ p: 2 }}>
                <Logo />
              </Box>
            </Toolbar>
          </AppBar>
          {isLoading && (
            <Box sx={{ height: 2, mb: "-2px" }}>
              <LinearProgress sx={{ height: 2 }} color="inherit" />
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
