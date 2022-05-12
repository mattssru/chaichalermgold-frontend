import { Box } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import prefix from "utils/path";

const useStyles = makeStyles(() => ({
  root: {
    position: "relative",
    width: "100%",
    paddingTop: "56.24%",
    "& img": {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  },
}));

const SectionBanner = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <img src={`${prefix}/images/banner.jpg`} alt="" />
    </Box>
  );
};

export default SectionBanner;
