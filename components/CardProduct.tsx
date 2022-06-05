import { Box, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import Link from "./Link";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
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
        "linear-gradient(180deg, rgba(24, 24, 29, 0.1), rgba(24, 24, 29, 0.1))",
      "&:hover": {
        opacity: 1,
        "& .hoverButton": {
          transform:
            "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
          willChange: "transform",
        },
      },
    },
    "& .productDetail": {
      "& a": {
        fontSize: 16,
        lineHeight: "34px",
        display: "block",
        fontWeight: 600,
        "&:hover": {
          opacity: 0.7,
        },
        // [theme.breakpoints.down("md")]: {
        //   fontSize: 22,
        //   lineHeight: "28px",
        // },
      },
    },
    "& .price": {
      fontSize: 21,
      lineHeight: "30px",
    },
  },
}));

const CardProduct = (props: any) => {
  const classes = useStyles(props);
  const { image, name, price } = props;
  return (
    <Box className={classes.root}>
      <Box
        sx={{
          display: "flex",
          alignItems: "stretch",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <Link
          href={`/products/detail/${props.productId}`}
          className="imgOverlay"
        >
          <Box
            className="hoverButton"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              bgcolor: "#fff",
              color: "#000",
              height: { xs: 50, sm: 40, md: 50 },
              fontSize: { xs: 16, sm: 12, md: 16 },
              maxWidth: 300,
              width: "100%",
              margin: "0 auto",
              transition: "all 0.3s ease-in",
              transform:
                "translate3d(0px, 8px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
            }}
          >
            VIEW DETAILS
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
          }}
        >
          <img src={image} alt="" />
        </Box>
      </Box>
      <Box className="productDetail" sx={{ mt: "15px" }}>
        <Link href={`/products/detail/${props.productId}`}>{name}</Link>
        <Typography className="price" sx={{ color: "#777" }}>
          {price} THB
        </Typography>
      </Box>
    </Box>
  );
};

export default CardProduct;