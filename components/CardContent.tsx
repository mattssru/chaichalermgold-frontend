import { Box, Typography, Link } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles(() => ({
  root: {
    "& .imageCard": {
      position: "relative",
      width: "100%",
      paddingTop: "50%",
      display: "block",
      marginBottom: 15,
    },
    "& .detailCard": {
      "& p": {
        fontSize: (props: any) => props.sizedes,
        height: (props: any) => props.heightdes,
        marginBottom: (props: any) => props.mb,
      },
    },
    "& .name": {
      fontSize: (props: any) => props.fontsize || 20,
      lineHeight: (props: any) => props.lineheight || "24px",
      marginBottom: 5,
      display: "block",
      "&:hover": {
        opacity: 0.7,
      },
    },
  },
}));

const CardContent = (props: any) => {
  const classes = useStyles(props);
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
          variant="body2"
          sx={{
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
