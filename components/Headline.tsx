import { Typography } from "@mui/material";
import React from "react";

const Headline = (props: any) => {
  return (
    <Typography variant="h1" sx={{ mb: "30px" }}>
      {props.children}
    </Typography>
  );
};

export default Headline;
