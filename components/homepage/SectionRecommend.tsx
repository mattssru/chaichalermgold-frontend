import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles((theme: any) => ({ root: {} }));

const SectionRecommend = () => {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <Container maxWidth="lg">Recommend</Container>
    </section>
  );
};

export default SectionRecommend;
