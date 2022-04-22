import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
const theme = createTheme();

const customTheme = createTheme({
  typography: {
    body1: {
      fontFamily: "Poppins, Arial",
    },
    body2: {},
    button: {},
    caption: {
      fontFamily: "Poppins, Arial",
      fontWeight: 400,
    },
    h1: {
      fontFamily: "PT Serif, Arial",
      fontWeight: 700,
      [theme.breakpoints.up("xs")]: {
        fontSize: "2rem",
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: "2.4rem",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "2.9rem",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "3.1rem",
      },
    },
    h2: {
      fontFamily: "PT Serif, Arial",
      fontWeight: 700,
      [theme.breakpoints.up("xs")]: {
        fontSize: "1.75rem",
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: "2rem",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "2.4rem",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "2.9rem",
      },
    },
    h3: {
      fontFamily: "PT Serif, Arial",
      fontWeight: 700,
      [theme.breakpoints.up("xs")]: {
        fontSize: "1.65rem",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "2rem",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "2.4rem",
      },
    },
    h4: {
      fontFamily: "PT Serif, Arial",
      fontWeight: 700,
      [theme.breakpoints.up("xs")]: {
        fontSize: "1.53rem",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "1.8rem",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "2.1rem",
      },
    },
    h5: {
      fontFamily: "PT Serif, Arial",
      fontWeight: 700,
      fontSize: "1.5rem",
    },
    h6: {
      fontFamily: "PT Serif, Arial",
      fontWeight: 700,
      fontSize: "1rem",
    },
  },
  palette: {
    primary: {
      main: "#660644",
    },
    secondary: {
      main: "#ff0067",
    },
    error: {
      main: red.A400,
    },
  },
});

export default customTheme;
