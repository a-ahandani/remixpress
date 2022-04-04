import { ReactNode, useEffect } from "react";
import { useTransition, useFetcher } from "remix";
import Logo from "~/components/Logo";
import LayoutProvider from "~/components/Layout/components/LayoutProvider";
import { Container, AppBar, Toolbar, Box, LinearProgress } from "@mui/material";
import Menu from "~/components/Menu";
import type { Settings } from "~/api/getSettings";

const MENU_WIDTH = 80;

export default function Layout({ children }: { children: ReactNode }) {
  const { state } = useTransition();
  const {
    load: fetchSettings,
    data: settings,
    state: settingsState,
  } = useFetcher<Settings>();

  const isLoading = state === "loading";

  useEffect(() => {
    fetchSettings("/settings");
  }, []);

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
                borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
              }}
            >
              <Box sx={{ p: 2 }}>
                <Logo
                  loading={settingsState !== "idle"}
                  title={settings?.allSettings.generalSettingsTitle}
                  description={settings?.allSettings.generalSettingsDescription}
                />
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
