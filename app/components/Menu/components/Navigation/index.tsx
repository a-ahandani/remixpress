import Logo from "~/components/Logo";
import { alpha } from "@mui/material/styles";
import { Grid, Box, MenuList } from "@mui/material";
import bgImage from "~/resources/images/hip-square.png";
import NavLink from "./components/NavLink";
import useLayout from "~/components/Layout/hooks/use-layout-context";
import useSettings from "~/components/Settings/hooks/use-settings-context";
import type { NavigationProps } from "./types";
import { sortBy } from "lodash";

export default function Navigation({ ...rest }: NavigationProps) {
  const settings = useSettings();
  const { layoutState } = useLayout();
  const { isMenuOpen } = layoutState;

  return (
    <Box
      {...rest}
      sx={{
        flexDirection: "row",
        display: "flex",
        height: "100vh",
        width: "100vw",
        ...rest?.sx,
      }}
    >
      <Grid sx={{ height: "100vh", width: "100vw" }} container spacing={0}>
        <Grid item xs={5}>
          <Box sx={{ fontWeight: "bold", height: "100vh" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              {isMenuOpen && <Logo hideDescription size="large" />}
            </Box>
          </Box>
        </Grid>
        <Grid item xs={7}>
          <Box
            sx={{
              backgroundColor: (theme) =>
                alpha(
                  theme.palette.primary.main,
                  theme.palette.action.selectedOpacity
                ),
              // background: `url(${bgImage})`,
              height: "100vh",
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <MenuList>
              {sortBy(settings.menus?.sidebar?.menuItems.nodes, ["order"]).map(
                (menu) => {
                  return (
                    <NavLink key={menu.id} to={menu.path}>
                      {menu.label}
                    </NavLink>
                  );
                }
              )}
            </MenuList>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
