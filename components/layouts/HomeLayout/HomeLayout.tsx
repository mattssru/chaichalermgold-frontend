import { makeStyles } from "@mui/styles";
import dynamic from "next/dynamic";
import React, { useEffect } from "react";
import AOS from "aos";

const Header = dynamic(import("../Header"));
const Footer = dynamic(import("../Footer"));

const useStyles = makeStyles((theme: any) => ({
  article: {
    paddingTop: 110,
    paddingBottom: 50,
    minHeight: "65vh",
    [theme.breakpoints.down("lg")]: {
      paddingTop: 90,
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: 85,
    },
  },
}));

const HomeLayout = (props: any) => {
  const classes = useStyles();
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Header />
      <article className={classes.article}>{props.children}</article>
      <Footer />
    </>
  );
};

export default HomeLayout;
