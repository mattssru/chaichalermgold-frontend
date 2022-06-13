import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import {
  FacebookIcon,
  FacebookShareButton,
  LineIcon,
  LineShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";

const useStyles = makeStyles((theme: any) => ({
  root: {
    display: "inline-flex",
    alignItems: "center",
    "& .share": {
      color: theme.palette.primary.main,
      border: "1px solid #e9e9e9",
      borderRadius: 2,
      position: "relative",
      display: "inline-flex",
      marginRight: 20,
      "&::before": {
        content: '""',
        position: "absolute",
        top: "50%",
        WebkitTransform: "translateY(-50%)",
        transform: "translateY(-50%)",
        left: "100%",
        width: 0,
        height: 0,
        borderStyle: "solid",
        borderWidth: "9px 0 9px 11px",
        borderColor: "transparent transparent transparent #e9e9e9",
      },
      "&::after": {
        content: '""',
        position: "absolute",
        top: "50%",
        WebkitTransform: "translateY(-50%)",
        transform: "translateY(-50%)",
        left: "100%",
        width: 0,
        height: 0,
        borderStyle: "solid",
        borderWidth: "8px 0 8px 10px",
        borderColor: "transparent transparent transparent #fff",
      },
      "& .icon": {
        width: 40,
        height: 35,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "& svg": {
          fontSize: 14,
        },
      },
      "& .text": {
        width: 65,
        height: 35,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        fontSize: 12,
        fontWeight: 600,
        "&::before": {
          content: '""',
          position: "absolute",
          top: 9,
          left: 0,
          width: 1,
          height: 16,
          backgroundColor: "#000",
          opacity: 0.2,
          zIndex: 1,
        },
      },
    },
    "& .listShare": {
      lineHeight: 0,
      "& button": {
        marginRight: 7,
        "&:last-child": {
          marginRight: 0,
        },
      },
    },
  },
}));

const ShareSocial = (props: any) => {
  const classes = useStyles();
  // const url = `https://www.facebook.com/dialog/send?link=/${props.url2}`;
  return (
    <Box className={classes.root}>
      <Box className="share">
        <Box className="icon">
          <ShareRoundedIcon fontSize="small" color="primary" />
        </Box>
        <Box className="text">Share</Box>
      </Box>
      <Box className="listShare">
        <FacebookShareButton
          url={props.url}
          className="Demo__some-network__share-button"
        >
          <FacebookIcon size={35} />
        </FacebookShareButton>
        <LineShareButton
          url={props.url}
          className="Demo__some-network__share-button"
        >
          <LineIcon size={35} />
        </LineShareButton>
        <TwitterShareButton
          url={props.url}
          className="Demo__some-network__share-button"
        >
          <TwitterIcon size={35} />
        </TwitterShareButton>
      </Box>
    </Box>
  );
};

export default ShareSocial;
