import { ReactNode } from "react";
import { useTransition } from "remix";
import Logo from "~/components/Logo";
import { useTheme } from "@mui/material/styles";
import MenuButton from "~/components/Menu/components/MenuButton";
import LayoutProvider from "~/components/Layout/components/LayoutProvider";
import { Container, AppBar, Toolbar, Box, useMediaQuery } from "@mui/material";
import Menu from "~/components/Menu";
import type { LayoutContextProps } from "./context";

const MENU_WIDTH = 80;

export default function Layout({ children }: { children: ReactNode }) {
  const { state } = useTransition();
  const isLoading = state === "loading";

  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only("xs"));

  return (
    <LayoutProvider defaultLayoutState={{ isMenuOpen: false }}>
      {({ layoutState }: LayoutContextProps) => {
        return (
          <Box
            sx={{
              maxHeight: "100vh",
              overflow: layoutState?.isMenuOpen ? "hidden" : undefined,
            }}
          >
            {isXs && (
              <MenuButton
                sx={{
                  position: "fixed",
                  right: 18,
                  top: 18,
                  zIndex: 2,
                  backgroundColor: (theme) => theme.palette.common.white,
                }}
              />
            )}
            <Menu width={MENU_WIDTH} />
            <Box
              sx={{
                width: {
                  xs: "100%",
                  sm: `calc(100vw - ${MENU_WIDTH}px)`,
                },
              }}
            >
              <AppBar position="static" color="transparent" elevation={0}>
                <Toolbar
                  sx={{
                    flexWrap: "wrap",
                    height: 122,
                  }}
                >
                  <Box sx={{ p: 1 }}>
                    <Logo />
                  </Box>
                </Toolbar>
              </AppBar>
              <Container maxWidth="md">
                <Box sx={{ my: 4, mx: { xs: 1, sm: 0 } }}>{children}</Box>
              </Container>
            </Box>
          </Box>
        );
      }}
    </LayoutProvider>
  );
}
