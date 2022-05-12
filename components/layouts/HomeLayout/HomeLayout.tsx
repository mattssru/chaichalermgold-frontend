import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import dynamic from "next/dynamic";
import React from "react";

const Header = dynamic(import("../Header"));
const Footer = dynamic(import("../Footer"));

const useStyles = makeStyles((theme: any) => ({
  article: {
    paddingTop: 110,
    [theme.breakpoints.down("lg")]: {
      paddingTop: 90,
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: 85,
    },
  },
}));

const HomeLayout = (props: any) => {
  const { children } = props;
  const classes = useStyles();
  return (
    <Box>
      <Header />
      <article className={classes.article}>{children}</article>
      <Footer />
    </Box>
  );
};

export default HomeLayout;
