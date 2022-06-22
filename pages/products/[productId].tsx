import { Box, Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import router from "next/router";
import React, { useEffect, useState } from "react";
import { getProduct } from "utils/api";

const useStyles = makeStyles((theme: any) => ({
  root: {
    padding: "50px 0",
    [theme.breakpoints.down("md")]: {
      padding: "30px 0,",
    },
    "& .imageProduct": {
      position: "relative",
      paddingTop: "100%",
      width: "100%",
    },
  },
}));

// interface IProduct {
//   name: string | "";
//   description: string | "";
//   image: string | "";
//   price: number | 1;
//   id: number;
// }

const ProductDetail = () => {
  const classes = useStyles();
  const [product, setProduct] = useState<any>();

  useEffect(() => {
    const { productId } = router.query;
    const fetch = async () => {
      const data = await getProduct(productId);
      setProduct(data);
      return data;
    };
    fetch();
  }, [getProduct]);

  return (
    <section className={classes.root}>
      <Container maxWidth="lg">
        <Typography variant="h1" sx={{ mb: "30px" }}>
          สินค้า
        </Typography>
        <Grid container spacing={4}>
          <Grid item sm={6} xs={12}>
            <Box className="imageProduct">
              <img src={product?.image} alt="" className="ratio" />
            </Box>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Typography variant="h3">{product?.name}</Typography>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default ProductDetail;
