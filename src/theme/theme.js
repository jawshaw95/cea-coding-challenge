import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  palette: {
    common: {
      honeydew: "#F3FCF0"
    },
    primary: {
      main: "#2B303A"
    },
    secondary: {
      main: "#BFCBC2"
    }
  },
  typography: {
    h1: {
      fontSize: "3rem",
      "@media (max-width:960px)": {
        fontSize: "2.25rem"
      },
      "@media (max-width:600px)": {
        fontSize: "1.75rem"
      },
      color: "black",
      fontWeight: "bold"
    },
    h2: {
      fontSize: "1.5em",
      fontWeight: "Bold"
    },
    h3: {
      fontSize: "1.3rem",
      fontWeight: "lighter"
    },
    h4: {
      fontSize: "1.2rem",
      fontWeight: "bold"
    },
    h6: {
      fontSize: ".9rem",
      fontWeight: "lighter"
    },
    color: "black",
    subtitle1: {
      fontSize: ".75rem",
      fontWeight: 10
    },
    body1: {
      fontWeight: 500
    }
  },
  link: {
    textDecoration: "none",
    textTransform: "none"
  },
  spacing: factor => `${0.25 * factor}rem`
});
