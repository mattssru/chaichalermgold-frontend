import { makeStyles } from "@mui/styles";
import dynamic from "next/dynamic";
import React, { useEffect } from "react";
import AOS from "aos";
import { Box } from "@mui/material";
import prefix from "utils/path";

const Header = dynamic(import("../Header"));
const Footer = dynamic(import("../Footer"));

const useStyles = makeStyles((theme: any) => ({
  root: {
    "& header": {
      boxShadow: "0 3px 6px rgba(0,0,0,0.10)",
      "& .btnMenu": {
        color: theme.palette.primary.main,
      },
      "& .mobileIcon": {
        color: "#202020",
      },
    },
  },
  article: {
    paddingTop: 85,
    paddingBottom: 50,
    minHeight: "100vh",
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
      paddingTop: 81,
    },
  },
}));

const InnerLayout = (props: any) => {
  const classes = useStyles();
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Box className={classes.root}>
      <Header logo={`${prefix}/images/logo_black.svg`} />
      <article className={classes.article}>
        <section>{props.children}</section>
      </article>
      <Footer />
    </Box>
  );
};

export default InnerLayout;
