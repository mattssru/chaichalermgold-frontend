import { Box, Link } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
//"linear-gradient(180deg, rgba(24, 24, 29, 0.1), rgba(24, 24, 29, 0.1))",
//
const useStyles = makeStyles(() => ({
  root: {
    zIndex: 1,
    "& .productImage": {
      "& img": {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      },
    },
    "& .imgOverlay": {
      position: "absolute",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "stretch",
      zIndex: 30,
      opacity: 0,
      width: "100%",
      height: "100%",
      padding: "0 15px 15px 15px",
      backgroundImage:
        "linear-gradient(180deg, rgb(1 1 2 / 46%), rgb(24 24 29 / 25%))",
      "&:hover": {
        opacity: 1,
        zIndex: 10,
        "& .hoverButton": {
          transform:
            "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
          willChange: "transform",
        },
      },
    },
  },
}));

const CardRecommend = (props: any) => {
  const classes = useStyles();
  const { productId, image, name } = props;
  return (
    <Box
      className={classes.root}
      sx={{
        display: "flex",
        alignItems: "stretch",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <Link href={`/products/${props.productId}`} className="imgOverlay">
        <Box
          sx={{
            color: "#fff",
            position: "absolute",
            fontWeight: 600,
            fontSize: 20,
            width: "100%",
            textAlign: "center",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -100%)",
          }}
        >
          {name}
        </Box>
        <Box
          className="hoverButton"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            bgcolor: "#fff",
            color: "#000",
            height: 45,
            fontSize: 14,
            maxWidth: 300,
            width: "100%",
            margin: "0 auto",
            transition: "all 0.3s ease-in",
            transform:
              "translate3d(0px, 8px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d",
          }}
        >
          VIEW PRODUCT
        </Box>
      </Link>
      <Box
        className="productImage"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          position: "relative",
          width: "100%",
          paddingTop: "100%",
          "& img": {
            borderRadius: "0.6rem",
          },
        }}
      >
        <img src={image} alt="" />
      </Box>
    </Box>
  );
};

export default CardRecommend;
