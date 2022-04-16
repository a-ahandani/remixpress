import Logo from "~/components/Logo";
import { alpha } from "@mui/material/styles";
import { Box, MenuList, useMediaQuery } from "@mui/material";
import NavLink from "./components/NavLink";
import { useTheme } from "@mui/material/styles";
import useLayout from "~/components/Layout/hooks/use-layout-context";
import useSettings from "~/components/Settings/hooks/use-settings-context";
import type { NavigationProps } from "./types";
import { sortBy } from "lodash";

export default function Navigation({ ...rest }: NavigationProps) {
  const settings = useSettings();
  const { layoutState } = useLayout();
  const { isMenuOpen } = layoutState;
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only("xs"));
  return (
    <Box
      {...rest}
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: { sm: "row", xs: "column" },
        backgroundColor: (theme) => ({
          xs: theme.palette.common.white,
          sm: "transparent",
        }),
        ...rest?.sx,
      }}
    >
      <Box
        sx={{
          width: "100%",
          flex: 1,
          backgroundColor: (theme) => ({
            sm: "transparent",
            xs: alpha(
              theme.palette.primary.main,
              theme.palette.action.selectedOpacity
            ),
          }),
        }}
      >
        {!isXs && (
          <Box
            sx={{
              fontWeight: "bold",
              height: "100vh",
            }}
          >
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
        )}
      </Box>
      <Box
        sx={{
          width: "100%",
          flex: { sm: 1.1, md: 1.5 },
          backgroundColor: (theme) => theme.palette.common.white,
        }}
      >
        <Box
          sx={{
            backgroundColor: (theme) =>
              alpha(
                theme.palette.primary.main,
                theme.palette.action.selectedOpacity
              ),
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
      </Box>
    </Box>
  );
}
