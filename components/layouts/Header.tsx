import {
  AppBar,
  Box,
  Container,
  Drawer,
  Grid,
  IconButton,
  Theme,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Link from "components/Link";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    "& .logo": {
      display: "block",
      height: 80,
      [theme.breakpoints.down("lg")]: {
        height: 60,
      },
      [theme.breakpoints.down("sm")]: {
        height: 55,
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
      fontWeight: 400,
      letterSpacing: 0,
      color: theme.palette.primary.main,
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
    menu: "HOMEPAGE",
    href: "/",
  },
  {
    menu: "Wedding & Engagement",
    href: "/wedding",
  },
  {
    menu: "PROMOTIONS",
    href: "/promotions",
  },
  {
    menu: "CONTENTS",
    href: "/contents",
  },
  {
    menu: "PRODUCTS",
    href: "/products",
  },
  {
    menu: "CONTACT",
    href: "/contact",
  },
  {
    menu: "ABOUT US",
    href: "/about-us",
  },
];

const Header = () => {
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
    <AppBar
      position="fixed"
      className={classes.root}
      sx={{
        boxShadow: { xs: "0 3px 6px rgba(0,0,0,0.16)" },
        bgcolor: "#fff",
        py: "15px",
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
              <img src="/images/logo.svg" alt="" />
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
                <MenuIcon color="primary" fontSize="large" />
              </IconButton>
              <Drawer
                className={classes.drawer}
                anchor="left"
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                sx={{
                  "& .MuiDrawer-paper": {
                    width: { md: "30%", sm: "70%" },
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
  );
};

export default Header;
