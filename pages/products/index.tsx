import React, { useEffect, useState } from "react";
import { fetchProduct, fetchProductV2 } from "utils/api";
import { makeStyles } from "@mui/styles";
import { Container, Grid, Typography } from "@mui/material";
import CardProduct from "components/CardProduct";
import BreadcrumpDefault from "components/BreadCrumpDefault";
const useStyles = makeStyles((theme: any) => ({
  root: {
    padding: "50px 0",
    [theme.breakpoints.down("md")]: {
      padding: "30px 0",
    },
  },
}));
// http://165.22.96.125:8000/wp-content/uploads/2022/06/S__22896676.jpg
const ProductsPage = () => {
  const classes = useStyles();
  const [products, setProduct] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const data = await fetchProductV2();
      setProduct(data);
      return data;
    };
    fetch();
  }, [fetchProduct]);

  // useEffect(() => {
  //   const fetch: any = async () => {
  //     const data: any = await fetchProduct();
  //     setProduct(data);
  //     return data;
  //   };
  //   fetch();
  // }, [fetchProduct]);
  console.log("products", products);
  const navi = [{ title: "หน้าแรก", path: "/" }, { title: "สินค้า" }];
  return (
    <section className={classes.root}>
      <Container maxWidth="lg">
        <BreadcrumpDefault items={navi} />
        <Typography variant="h1" sx={{ mb: "30px" }}>
          สินค้า
        </Typography>
        <Grid container spacing={2}>
          {products.map((item: any, index: number) => {
            return (
              <Grid item lg={3} sm={4} xs={6} key={index}>
                <CardProduct
                  productId={item.id}
                  image={item.images[0].src}
                  name={item.name}
                  price={item.price}
                  descriptions={item.descriptions}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </section>
  );
};

export default ProductsPage;
