import {
  AppBar,
  Box,
  Container,
  Drawer,
  Grid,
  IconButton,
  Theme,
  useScrollTrigger,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Link from "components/Link";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import prefix from "utils/path";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    "&.MuiPaper-elevation0": {
      "& .logoWhite": {
        display: "block",
      },
      "& .logoBlack": {
        display: "none",
      },
    },
    "&.MuiPaper-elevation4": {
      "& .logoWhite": {
        display: "none",
      },
      "& .logoBlack": {
        display: "block",
      },
    },
    "& .logo": {
      display: "block",
      height: 55,
      "&:hover img": {
        transform: "none",
        transition: "none",
      },
      [theme.breakpoints.down("sm")]: {
        height: 40,
      },
      "& img": {
        maxWidth: "100%",
        height: "100%",
        objectFit: "cover",
      },
    },
    "& .btnMenu": {
      marginRight: 15,
      display: "block",
      fontWeight: 500,
      letterSpacing: 0,
      color: "#fff",
    },
  },
  drawer: {
    "& .btnMenu": {
      marginRight: 15,
      display: "block",
      fontWeight: 400,
      color: theme.palette.primary.main,
    },
  },
}));

const menu = [
  {
    menu: "Home",
    href: "/",
  },
  {
    menu: "Products",
    href: "/products",
  },
  {
    menu: "Engagement",
    href: "/wedding",
  },
  {
    menu: "Promotion",
    href: "/promotions",
  },
  {
    menu: "Contents",
    href: "/contents",
  },
  {
    menu: "Contact",
    href: "/contact",
  },
];
interface Props {
  window?: () => Window;
  children: React.ReactElement;
}
function ElevationScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    // elevation: trigger ? "shadow" : "noShadow",
    elevation: trigger ? 4 : 0,
  });
}

const Header = (props: any) => {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const toggleDrawer = () => {
    setOpenDrawer(true);
  };

  const drawer = () => {
    return menu.map((item: any, index: number) => {
      return (
        <Link href={item.href} key={index} className="btnMenu">
          {item.menu}
        </Link>
      );
    });
  };

  return (
    <ElevationScroll {...props}>
      <AppBar
        position="fixed"
        className={classes.root}
        sx={{
          // boxShadow: { xs: "0 3px 6px rgba(0,0,0,0.10)" },
          bgcolor: "transparent",
          py: "10px",
          "&.MuiPaper-elevation4": {
            bgcolor: "#fff",
            boxShadow: { xs: "0 3px 6px rgba(0,0,0,0.10)" },
            "& .btnMenu": {
              color: "#202020",
            },
            "& .mobileIcon": {
              color: "#202020",
            },
          },
        }}
      >
        <Container maxWidth="lg">
          <Grid
            container
            spacing={2}
            alignItems="center"
            sx={{
              justifyContent: "space-between",
            }}
          >
            <Grid item lg={3}>
              <Link href="/" className="logo">
                <img
                  className="logoWhite"
                  src={props.logo || `${prefix}/images/logo_white.svg`}
                  alt=""
                />
                <img
                  className="logoBlack"
                  src={`${prefix}/images/logo_black.svg`}
                  alt=""
                />
              </Link>
            </Grid>
            <Grid item lg={9}>
              <Box
                className="listMenu"
                sx={{
                  display: { lg: "flex", md: "flex", sm: "none", xs: "none" },
                  justifyContent: "flex-end",
                }}
              >
                {drawer()}
              </Box>
              <Box
                sx={{
                  display: {
                    lg: "none",
                    md: "none",
                    sm: "block",
                  },
                }}
              >
                <IconButton onClick={toggleDrawer}>
                  <MenuIcon
                    fontSize="large"
                    sx={{ color: { xs: "#fff" } }}
                    className="mobileIcon"
                  />
                </IconButton>
                <Drawer
                  className={classes.drawer}
                  anchor="left"
                  open={openDrawer}
                  onClose={() => setOpenDrawer(false)}
                  sx={{
                    "& .MuiDrawer-paper": {
                      width: { xs: "60%", sm: "30%" },
                      // width: "40%",
                      backgroundColor: "rgb(18, 18, 18)",
                      backgroundImage:
                        "linear-gradient(rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15))",
                      color: "#fff",
                      "& a": {
                        height: 50,
                        color: "rgb(255, 255, 255)",
                        padding: "8px 16px",
                        mr: 0,
                        borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
                        display: "flex",
                        alignItems: "center",
                        fontSize: 14,
                        "&:hover": {
                          backgroundColor: "rgba(255, 255, 255, 0.08)",
                        },
                      },
                    },
                  }}
                >
                  {drawer()}
                </Drawer>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </AppBar>
    </ElevationScroll>
  );
};

export default Header;
