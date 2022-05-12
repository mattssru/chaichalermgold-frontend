import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          WebkitFontSmoothing: "auto",
          fontFamily: [
            "Work Sans",
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(","),
          fontSize: "100%",
          lineHeight: "24px",
          fontWeight: 400,
          maxWidth: "1920px",
          color: "#3d3d3d",
          backgroundColor: "#fff",
          margin: 0,
          padding: 0,
          border: 0,
          verticalAlign: "baseline",
        },
        article: {
          overflow: "hidden",
        },
        MuiButton: {
          text: {
            color: "white",
          },
        },
        button: {
          fontWeight: 600,
        },
        strong: {
          fontWeight: 700,
        },
        a: {
          textDecoration: "none",
          curser: "pointer",
          MozTransition: "all .2s ease-in",
          WebkitTransition: "all .2s ease-in",
          transition: "all .2s ease-in",
          fontWeight: 700,
        },
        ".MuiContainer-root, .MuiToolbar-gutters": {
          padding: "0 15px !important",
        },
        ".MuiToolbar-root .MuiContainer-root": {
          "@media (max-width: 767px)": {
            padding: "0 !important",
          },
        },
        ".MuiInputBase-root": {
          fontFamily: "Prompt-Regular !important",
        },
        ".MuiTableCell-root": {
          fontFamily: "DBHeavent",
          fontWeight: "normal !important",
        },
        "&:focus, &:hover, &:visited, &:link, &:active": {
          textDecoration: "none",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#202020",
    },
    secondary: {
      main: "#4A4A4A",
    },
    error: {
      main: "#f44336",
    },
    warning: {
      main: "#ff9800",
    },
    info: {
      main: "#F1F1F1",
    },
    success: {
      main: "#4caf50",
    },
  },
  typography: {
    h1: {
      fontFamily: "Work Sans",
      fontSize: "3.2rem",
      lineHeight: "3.2rem",
      fontWeight: 700,
    },
    h2: {
      fontFamily: "Work Sans",
      fontSize: "2rem",
      lineHeight: "2.2rem",
      fontWeight: 700,
    },
    h3: {
      fontFamily: "Work Sans",
      fontWeight: 700,
    },
    h4: {
      fontFamily: "Work Sans",
      fontWeight: 700,
    },
    h5: {
      fontFamily: "Work Sans",
      fontWeight: 700,
    },
    h6: {
      fontFamily: "Work Sans",
      fontWeight: 700,
    },
    body1: {
      fontSize: 24,
      lineHeight: "28px",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1024,
      lg: 1400,
      xl: 1920,
    },
  },
});

export default theme;
