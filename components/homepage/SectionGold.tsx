import { Box } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  root: {
    color: "green",
  },
}));

const SectionGold = () => {
  const classes = useStyles();
  return <Box className={classes.root}>SectionGold</Box>;
};

export default SectionGold;
