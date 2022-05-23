import React, { useEffect, useState } from "react";
import { fetchProduct } from "utils/api";
import { makeStyles } from "@mui/styles";
import { Link } from "@mui/material";
const useStyles = makeStyles(() => ({
  root: {
    paddingTop: 40,
  },
}));

const ProductsPage = () => {
  const [product, setProduct] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    async function scopeFunc() {
      const product = await fetchProduct();
      setProduct(product);
    }
    scopeFunc();
  }, [fetchProduct]);

  return (
    <section className={classes.root}>
      {product.map((item: any, index) => {
        return (
          <div key={index}>
            <div>{item.name}</div>
            <img src={item.image} width="200" />
            <div>{item.descriptions}</div>
            <div>20,000 THB</div>
          </div>
        );
      })}
    </section>
  );
};

export default ProductsPage;
