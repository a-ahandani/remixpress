import { Box, Drawer, IconButton } from "@mui/material";
import type { MenuProps } from "./types";
import { Link } from "remix";
import Navigation from "~/components/Menu/components/Navigation";
import useLayout from "~/components/Layout/hooks/use-layout-context";
import useSettings from "~/components/Settings/hooks/use-settings-context";
import Logo from "~/components/Logo";
import MenuButton from "./components/MenuButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

export default function Menu({ width }: MenuProps) {
  const settings = useSettings();

  const { layoutState } = useLayout();
  const { isMenuOpen } = layoutState;

  return (
    <Drawer
      sx={{
        display: "flex",
        height: "100%",
        width: "100%",
        "& .MuiDrawer-paper": {
          backgroundColor: "transparent",
          overflow: "hidden",
          ...(isMenuOpen && {
            width: "100%",
            transition: (theme) =>
              theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.shortest,
              }),
          }),
          ...(!isMenuOpen && {
            width: { xs: 0, sm: width },
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
          backgroundColor: (theme) => ({
            xs: theme.palette.common.white,
            md: "transparent",
          }),
          backdropFilter: { md: "blur(35px)" },
          "@-moz-document url-prefix()": {
            backgroundColor: (theme) => theme.palette.common.white,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            p: 2,
          }}
        >
          <MenuButton />
          <Box
            sx={{
              display: { xs: "flex", sm: "none" },
              flexDirection: "column",
              alignItems: "center",
              width: 50,
              flex: 1,
              justifyContent: "center",
            }}
          >
            <Logo
              sx={{
                transform: "rotate(90deg)",
                transformOrigin: "center center",
              }}
              LogoTypographyProps={{
                sx: { color: (theme) => theme.palette.grey[800] },
              }}
              size="small"
              hideDescription
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "center",
              mb: { xs: 6, sm: 3 },
              flex: 1,
            }}
          >
            <IconButton
              component={"a"}
              href={`https://github.com/${settings.configs?.github}`}
              size="small"
            >
              <GitHubIcon fontSize="small" />
            </IconButton>
            <IconButton
              component={"a"}
              href={`https://twitter.com/${settings.configs?.twitter}`}
              size="small"
            >
              <TwitterIcon fontSize="small" />
            </IconButton>
            <IconButton
              component={"a"}
              href={`https://www.linkedin.com/in/${settings.configs?.linkedin}`}
              size="small"
            >
              <LinkedInIcon fontSize="small" />
            </IconButton>
            <IconButton
              component={"a"}
              href={`mailto:${settings.configs?.email}`}
              size="small"
            >
              <EmailIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>
        <Navigation />
      </Box>
    </Drawer>
  );
}
