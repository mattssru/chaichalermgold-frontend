import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          WebkitFontSmoothing: "auto",
          // fontFamily: [
          //   "Work Sans",
          //   "-apple-system",
          //   "BlinkMacSystemFont",
          //   '"Segoe UI"',
          //   "Roboto",
          //   '"Helvetica Neue"',
          //   "Arial",
          //   "sans-serif",
          //   '"Apple Color Emoji"',
          //   '"Segoe UI Emoji"',
          //   '"Segoe UI Symbol"',
          // ].join(","),
          fontSize: "100%",
          lineHeight: "24px",
          fontWeight: 400,
          maxWidth: "1920px",
          color: "#3d3d3d",
          margin: "0 auto",
          backgroundColor: "#fff",
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
          fontWeight: 600,
          color: "#3d3d3d",
        },
        ".MuiFormControl-root": {
          ".MuiOutlinedInput-root": {
            "& input, select": {
              height: 50,
              paddingTop: 0,
              paddingBottom: 0,
            },
          },
        },
        ".MuiContainer-root, .MuiToolbar-gutters": {
          padding: "0 15px !important",
        },
        ".MuiButton-root": {
          display: "flex !important",
          borderRadius: "0 !important",
        },
        ".MuiToolbar-root .MuiContainer-root": {
          "@media (max-width: 767px)": {
            padding: "0 !important",
          },
        },
        "&:focus, &:hover, &:visited, &:link, &:active": {
          textDecoration: "none",
        },
        ".MTableToolbar": {
          padding: 0,
          display: "none",
        },
        // ".MuiTableCell-root": {
        //   padding: "15px 8px",
        // },
        ".MuiTableBody-root": {
          "& > tr:nth-child(even) td": {
            backgroundColor: "rgba(0,0,0,0.03)",
          },
        },
        ".MuiTableSortLabel-root": {
          "& .MuiTableSortLabel-icon": {
            margin: 0,
            fontSize: 15,
          },
        },
        ".MuiTable-root": {
          "& thead tr th:first-child": {
            "& .MuiCheckbox-colorSecondary.Mui-checked": {
              color: "#fff !important",
            },
          },
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#202020",
    },
    secondary: {
      main: "#777",
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
    fontFamily: [
      "Work Sans",
      "-apple-system",
      "Roboto",
      "Arial",
      "sans-serif",
    ].join(","),
    htmlFontSize: 16,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
    h1: {
      fontSize: "2rem",
      lineHeight: 1.22222,
      fontWeight: 600,
      "@media (max-width: 768px)": {
        fontSize: 30,
        lineHeight: "30px",
      },
    },
    h2: {
      fontSize: 30,
      lineHeight: "40px",
      fontWeight: 600,
      "@media (max-width: 768px)": {
        fontSize: 28,
        lineHeight: "31px",
      },
    },
    h3: {
      fontSize: 44,
      lineHeight: "50px",
      fontWeight: 400,
      "@media (max-width: 1024px)": {
        fontSize: 32,
        lineHeight: "40px",
      },
      "@media (max-width: 768px)": {
        fontSize: 28,
        lineHeight: "36px",
      },
    },
    h4: {
      fontSize: "1.5rem",
      lineHeight: 1.5,
      fontWeight: 600,
    },
    h5: {
      fontSize: "1.5rem",
      fontWeight: 600,
    },
    h6: {
      lineHeight: 1.5,
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: "1.3rem",
      lineHeight: 1.5,
      fontWeight: 400,
      "@media (max-width: 1024px)": {
        fontSize: "1rem",
        lineHeight: 1.5,
      },
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.5,
      fontWeight: 400,
      "@media (max-width: 991px)": {
        fontSize: "0.85rem",
        lineHeight: 1.35,
      },
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.43,
      fontWeight: 400,
      fontFamily: "Work Sans",
      "@media (max-width: 768px)": {
        fontSize: "0.875rem",
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1024,
      lg: 1400,
      xl: 2000,
    },
  },
});

export default theme;
