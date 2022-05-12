import React from "react";
import dynamic from "next/dynamic";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";

const useStyles = makeStyles((theme) => ({ root: {} }));

const Header = dynamic(import("../Header"));
const Footer = dynamic(import("../Footer"));

const InnerLayout = (props: any) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Header />
      <article>
        <section>{props.children}</section>
      </article>
      <Footer />
    </Box>
  );
};

export default InnerLayout;
