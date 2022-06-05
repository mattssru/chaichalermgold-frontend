import { Box, Typography } from "@mui/material";
import React from "react";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => ({
  root: {
    // "& h1": {
    //   position: "relative",
    //   paddingLeft: 20,
    //   "&::after": {
    //     content: '""',
    //     position: "absolute",
    //     left: 0,
    //     top: 0,
    //     width: 4,
    //     height: "100%",
    //     backgroundColor: theme.palette.secondary.main,
    //   },
    // },
  },
}));

const Headline = (props: any) => {
  const classes = useStyles();
  const { visionDate = false } = props;
  return (
    <Box className={classes.root} style={{ marginBottom: 40 }}>
      <Typography variant="h1">{props.children}</Typography>
      {visionDate && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mt: "10px",
          }}
        >
          <AccessTimeFilledIcon color="secondary" />
          <Typography color="secondary" sx={{ ml: "10px" }}>
            {props.date}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default Headline;
