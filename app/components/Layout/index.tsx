import { ReactNode, useState } from "react";

import Logo from "~/components/Logo";
import LayoutProvider from "~/components/Layout/components/LayoutProvider";
import { Container, AppBar, Toolbar, Box } from "@mui/material";
import Menu from "~/components/Menu";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <LayoutProvider defaultLayoutState={{ isMenuOpen: false }}>
      <Box>
        <Menu />
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
          <Container>
            <Box sx={{ my: 4 }}>{children}</Box>
          </Container>
        </Box>
      </Box>
    </LayoutProvider>
  );
}
