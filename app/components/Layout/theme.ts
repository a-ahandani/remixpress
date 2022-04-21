import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
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
      fontSize: "3.4rem",
    },
    h2: {
      fontFamily: "PT Serif, Arial",
      fontWeight: 700,
      fontSize: "2.9rem",
    },
    h3: {
      fontFamily: "PT Serif, Arial",
      fontWeight: 700,
      fontSize: "2.4rem",
    },
    h4: {
      fontFamily: "PT Serif, Arial",
      fontWeight: 700,
      fontSize: "2rem",
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

export default theme;
