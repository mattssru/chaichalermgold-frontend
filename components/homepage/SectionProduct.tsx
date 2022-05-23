import { Button, Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { ButtonTransform, CardProduct } from "..";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { mockproduct } from "mock/mockproduct";
import router from "next/router";

const useStyles = makeStyles((theme: any) => ({
  root: {
    backgroundColor: "#EDEDED",
    padding: "4rem 0",
    marginBottom: 50,
    [theme.breakpoints.down("sm")]: {
      padding: "2rem 0",
      marginBottom: 30,
    },
  },
}));

const SectionProduct = () => {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" sx={{ mb: "30px" }}>
          PRODUCTS
        </Typography>
        <Grid container spacing={3}>
          {mockproduct.map((item: any, index: number) => {
            return (
              <Grid item lg={3} sm={4} xs={12} key={index}>
                <CardProduct
                  productId={item.id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                />
              </Grid>
            );
          })}
        </Grid>
        <ButtonTransform
          title="VIEW ALL PRODUCTS"
          onClick={() => router.push("/products")}
        />
      </Container>
    </section>
  );
};

export default SectionProduct;
