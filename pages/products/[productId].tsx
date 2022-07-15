import { Box, Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import BreadcrumpDefault from "components/BreadCrumpDefault";
import router from "next/router";
import React, { useEffect, useState } from "react";
import { getProductV2 } from "utils/api";
import ImageGallery from "react-image-gallery";
import { currencyFormat } from "utils/helper";
import { InnerLayout } from "components/layouts/InnerLayout";
import "react-image-gallery/styles/css/image-gallery.css";
import ShareSocial from "components/ShareSocial";

const useStyles = makeStyles((theme: any) => ({
  root: {
    "& p": {
      "& img": {
        width: "auto",
        height: "auto",
        maxWidth: "100%",
        maxHeight: "100%",
        objectFit: "cover",
      },
    },
    "& .sliderThumnail": {
      position: "relative",
      "& .image-gallery-slide": {
        height: 500,
        [theme.breakpoints.down("md")]: {
          height: 350,
        },
        [theme.breakpoints.down("sm")]: {
          height: 450,
        },
      },
      "& .image-gallery-slide .image-gallery-image, .image-gallery-thumbnail .image-gallery-thumbnail-image":
        {
          height: "100%",
          objectFit: "cover",
          borderRadius: 10,
        },
      "& .image-gallery-thumbnail+.image-gallery-thumbnail": {
        marginLeft: 5,
      },
      "& .image-gallery-thumbnail.active, .image-gallery-thumbnail:focus": {
        opacity: 1,
      },
      "& .image-gallery-thumbnail .image-gallery-thumbnail-inner": {
        height: 90,
        [theme.breakpoints.down("md")]: {
          height: 70,
        },
      },
      "& .image-gallery-thumbnail": {
        width: 90,
        height: "100%",
        opacity: "0.6",
        border: "none",
        [theme.breakpoints.down("md")]: {
          width: 70,
        },
      },
      "& .image-gallery-thumbnails .image-gallery-thumbnails-container": {
        textAlign: "left",
      },
      "& .image-gallery-left-nav .image-gallery-svg, .image-gallery-right-nav .image-gallery-svg":
        {
          height: 30,
          [theme.breakpoints.down("sm")]: {
            height: 40,
          },
        },
      "& .image-gallery-left-nav, .image-gallery-right-nav": {
        padding: 0,
      },
    },
  },
}));
const images = [
  {
    original: "/images/default-image.png",
    thumbnail: "/images/default-image.png",
  },
  {
    original: "/images/default-image.png",
    thumbnail: "/images/default-image.png",
  },
];

const ProductDetail = () => {
  const classes = useStyles();
  const [product, setProduct] = useState<any>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const { productId } = router.query;
    const fetch = async () => {
      const data = await getProductV2(productId);
      setProduct(data);
      return data;
    };
    fetch();
    setLoading(false);
  }, [getProductV2]);

  const navi = [
    { title: "หน้าแรก", path: "/" },
    { title: "สินค้า", path: "/products" },
    { title: product?.name },
  ];
  const featureImage: any = product?.images.map((image: any) => {
    return {
      original: image?.src,
      thumbnail: image?.src,
    };
  });
  const url = window.location.href;
  return (
    <InnerLayout>
      <Container maxWidth="lg" className={classes.root}>
        <BreadcrumpDefault items={navi} />
        <Grid container spacing={4}>
          <Grid item sm={6} xs={12}>
            <Box className="sliderThumnail">
              <ImageGallery
                showFullscreenButton={false}
                showPlayButton={false}
                items={featureImage || images}
              />
            </Box>
          </Grid>
          <Grid item sm={6} xs={12}>
            {/* <Typography>วันที่อัพเดตสินค้า: {product?.date_created}</Typography> */}
            <Typography
              variant="h4"
              component="h1"
              sx={{
                fontWeight: 700,
                fontSize: 28,
                mb: "5px",
              }}
            >
              {product?.name}
            </Typography>
            <Typography
              sx={{
                fontSize: 20,
                fontWeight: 600,
                color: "#419547",
                marginBottom: "20px",
                borderBottom: "1px solid #e7e7e7",
                paddingBottom: "20px",
              }}
            >
              ฿{currencyFormat(product?.price)}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 600, mb: "10px", fontSize: "1.2rem" }}
            >
              Description
            </Typography>
            <Typography
              dangerouslySetInnerHTML={{ __html: product?.description }}
              sx={{
                color: "#7e7e7e",
                mb: "10px",
                marginBottom: "25px",
                borderBottom: "1px solid #e7e7e7",
                paddingBottom: "20px",
              }}
            ></Typography>
            <Typography
              sx={{
                mb: "20px",
                fontWeight: 600,
                color: product?.on_sale ? "#17c57a" : "#f26060",
              }}
            >
              {product?.on_sale ? "มีสินค้า" : "สินค้าหมด"}
            </Typography>
            <Typography sx={{ fontWeight: 600, mb: "5px" }}>
              Categories :{" "}
              {product?.categories.map((cate: any) => {
                return (
                  <span style={{ fontWeight: 400, color: "#7e7e7e" }}>
                    #{cate?.name}{" "}
                  </span>
                );
              })}
            </Typography>
            <Typography sx={{ fontWeight: 600, mb: "25px" }}>
              Tags :{" "}
              {product?.tags.map((tag: any) => {
                return (
                  <span style={{ fontWeight: 400, color: "#7e7e7e" }}>
                    #{tag?.name}{" "}
                  </span>
                );
              })}
            </Typography>
            <ShareSocial url={url} />
          </Grid>
        </Grid>
      </Container>
    </InnerLayout>
  );
};

export default ProductDetail;
