import { Box, Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import BreadcrumpDefault from "components/BreadCrumpDefault";
import { first } from "lodash";
import router from "next/router";
import React, { useEffect, useState } from "react";
import { getProductV2 } from "utils/api";
import ImageGallery from "react-image-gallery";
import { currencyFormat } from "utils/helper";

const useStyles = makeStyles((theme: any) => ({
  root: {
    padding: "50px 0",
    [theme.breakpoints.down("md")]: {
      padding: "30px 0",
    },
    "& .imageProduct": {
      // position: "relative",
      // paddingTop: "100%",
      // width: "100%",
    },
  },
}));

const ProductDetail = () => {
  const classes = useStyles();
  const [product, setProduct] = useState<any>();

  useEffect(() => {
    const { productId } = router.query;
    const fetch = async () => {
      const data = await getProductV2(productId);
      setProduct(data);
      return data;
    };
    fetch();
  }, [getProductV2]);

  const navi = [
    { title: "หน้าแรก", path: "/" },
    { title: "สินค้า", path: "/products" },
    { title: product?.name },
  ];
  const featureImage: any = product?.images.map((image: any) => {
    return {
      original: image.src,
      thumbnail: image.src,
      srcSet: image.src,
    };
  });

  console.log("product", product);
  return (
    <section className={classes.root}>
      <Container maxWidth="lg">
        <BreadcrumpDefault items={navi} />
        <Grid container spacing={4}>
          <Grid item sm={6} xs={12}>
            <Box className="imageProduct">
              {/* https://github.com/xiaolin/react-image-gallery */}
              {/* <ImageGallery showNav={false} items={featureImage} autoPlay />; */}
              {product?.images.map((image: any) => {
                return <div>{image.src}</div>;
              })}
            </Box>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Typography variant="h4" component="h1">
              {product?.name}
            </Typography>
            <Typography>ราคา: {currencyFormat(product?.price)}</Typography>

            <Typography>วันที่อัพเดตสินค้า: {product?.date_created}</Typography>
            <Typography>
              tags:{" "}
              {product?.tags.map((tag: any) => {
                return <span>#{tag?.name} </span>;
              })}
            </Typography>
            <Typography>
              category :{" "}
              {product?.categories.map((cate: any) => {
                return <span>#{cate?.name} </span>;
              })}
            </Typography>
            <Typography>
              In Stock: {product?.on_sale ? "มีวางจำหน่าย" : "สินค้าหมด"}
            </Typography>
            <Typography>
              รายละเอียด:
              <div
                dangerouslySetInnerHTML={{ __html: product?.description }}
              ></div>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default ProductDetail;
