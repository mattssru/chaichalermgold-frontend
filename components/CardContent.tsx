import { Box, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import ButtonTransform from "./ButtonTransform";
import Link from "./Link";

const useStyles = makeStyles(() => ({
  root: {
    "& .imageCard": {
      position: "relative",
      width: "100%",
      paddingTop: "50%",
      display: "block",
      marginBottom: 15,
    },
    "& .name": {
      fontSize: 28,
      lineHeight: "40px",
      marginBottom: 5,
      display: "block",
      "&:hover": {
        opacity: 0.7,
      },
    },
  },
}));

const CardContent = (props: any) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Link href={`/contents/${props.slug}`} className="imageCard">
        <img src={props.image} alt="" className="ratio" />
      </Link>
      <Box className="detailCard">
        <Link href={`/contents/${props.slug}`} className="name">
          {props.name}
        </Link>
        <Typography
          variant="body1"
          sx={{
            mb: "15px",
            color: "#777",
            textOverflow: "ellipsis",
            overflow: "hidden",
          }}
        >
          {props.description}
        </Typography>
      </Box>
    </Box>
  );
};

export default CardContent;
