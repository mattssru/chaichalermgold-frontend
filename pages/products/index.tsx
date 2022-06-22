import React, { useEffect, useState } from "react";
import { fetchProduct } from "utils/api";
import { makeStyles } from "@mui/styles";
import { Container, Grid, Typography } from "@mui/material";
import CardProduct from "components/CardProduct";
const useStyles = makeStyles((theme: any) => ({
  root: {
    padding: "50px 0",
    [theme.breakpoints.down("md")]: {
      padding: "30px 0",
    },
  },
}));

const ProductsPage = () => {
  const classes = useStyles();
  const [products, setProduct] = useState([]);

  useEffect(() => {
    const fetch: any = async () => {
      const data: any = await fetchProduct();
      setProduct(data);
      return data;
    };
    fetch();
  }, [fetchProduct]);

  return (
    <section className={classes.root}>
      <Container maxWidth="lg">
        <Typography variant="h1" sx={{ mb: "30px" }}>
          PRODUCTS
        </Typography>
        <Grid container spacing={2}>
          {products.map((item: any, index: number) => {
            return (
              <Grid item lg={3} sm={4} xs={6} key={index}>
                <CardProduct
                  productId={item.id}
                  image={item.image}
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
