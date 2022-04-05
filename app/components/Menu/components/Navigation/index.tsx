import Logo from "~/components/Logo";
import { alpha } from "@mui/material/styles";
import { Grid, Box, MenuList } from "@mui/material";
import bgImage from "~/resources/images/hip-square.png";
import NavLink from "./components/NavLink";
import useLayout from "~/components/Layout/hooks/use-layout-context";
import type { NavigationProps } from "./types";

export default function Navigation({ ...rest }: NavigationProps) {
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
      }}
    >
      <Grid sx={{ height: "100vh", width: "100vw" }} container spacing={0}>
        <Grid item xs={5}>
          <Box sx={{ p: 4, fontWeight: "bold", height: "100vh" }}>
            {isMenuOpen && <Logo />}
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
              background: `url(${bgImage})`,
              height: "100vh",
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <MenuList>
              <NavLink to={"/"}>Home</NavLink>
              <NavLink to={"/about"}>About</NavLink>
              <NavLink to={"/posts"}>Blog</NavLink>
              <NavLink to={"/contact"}>Contact</NavLink>
            </MenuList>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
