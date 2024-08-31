import React, { useCallback, useEffect, useState } from "react";
import { fetchProduct, getCategories } from "utils/api";
import { makeStyles } from "@mui/styles";
import {
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  Grid,
  Typography,
} from "@mui/material";
import CardProduct from "components/CardProduct";
import BreadcrumpDefault from "components/BreadCrumpDefault";
import { InnerLayout } from "components/layouts/InnerLayout";
import { sortBy } from "lodash";

const useStyles = makeStyles((theme: any) => ({}));

const ProductsPage = () => {
  const classes = useStyles();
  const [products, setProduct] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filtered, setFilter] = useState("ทั้งหมด");

  useEffect(() => {
    const fetch = async () => {
      const data = await fetchProduct();
      const temp: any =
        filtered !== "ทั้งหมด"
          ? data.filter((product: any) =>
              product.categories.some((cate: any) => cate.name === filtered)
            )
          : data;
      setProduct(temp);

      return data;
    };
    fetch();
  }, [fetchProduct, filtered]);

  useEffect(() => {
    const fetch = async () => {
      const data = await getCategories();
      const temp: any = sortBy(data, ["id"]); // data.filter((data: any) => data.name !== "ทั้งหมด");
      setCategories(temp);
      return data;
    };
    fetch();
  }, [getCategories]);

  // const handleChange = useCallback((category :string) => {
  //   products.filter((product :any) => return product.)
  // }, [])
  // useEffect(() => {
  //   const fetch: any = async () => {
  //     const data: any = await fetchProduct();
  //     setProduct(data);
  //     return data;
  //   };
  //   fetch();
  // }, [fetchProduct]);
  const navi = [{ title: "หน้าแรก", path: "/" }, { title: "สินค้า" }];
  return (
    <InnerLayout>
      <Container maxWidth="lg">
        <BreadcrumpDefault items={navi} />
        <Grid container spacing={2}>
          <Grid item md={3} sm={12} xs={12}>
            <Typography
              variant="h1"
              component="h2"
              sx={{ mb: { xs: "10px", md: "25px" } }}
            >
              หมวดหมู่สินค้า
            </Typography>
            <FormGroup>
              <Grid container spacing={0}>
                {categories?.map((category: any) => {
                  return (
                    <Grid key={category?.id} item md={12} sm={3} xs={6}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            onClick={() => setFilter(category.name)}
                            checked={filtered === category?.name}
                          />
                        }
                        label={category?.name || ""}
                        sx={{ mr: "0px", color: "#7e7e7e" }}
                      />
                    </Grid>
                  );
                })}
              </Grid>
            </FormGroup>
          </Grid>
          <Grid item md={9} sm={12} xs={12}>
            <Typography variant="h1" component="h2" sx={{ mb: "30px" }}>
              สินค้า
            </Typography>
            <Grid container spacing={2}>
              {products.map((item: any, index: number) => {
                return (
                  <Grid item lg={4} sm={4} xs={6} key={index}>
                    <CardProduct
                      productId={item.id}
                      image={item.thumb}
                      name={item.name}
                      price={item.price}
                      descriptions={item.descriptions}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </InnerLayout>
  );
};

export default ProductsPage;
