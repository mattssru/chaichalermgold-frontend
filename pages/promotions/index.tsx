import { CardPromotions } from "@components/*";
import { makeStyles } from "@mui/styles";
import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { fetchPromotions } from "utils/api";
import BreadcrumpDefault from "components/BreadCrumpDefault";
import { InnerLayout } from "components/layouts/InnerLayout";

const useStyles = makeStyles((theme: any) => ({}));

const PromotionPage = () => {
  const classes = useStyles();
  const [promotions, setPromotions] = useState([]);

  useEffect(() => {
    const fetch: any = async () => {
      const data: any = await fetchPromotions();
      setPromotions(data);
      return data;
    };
    fetch();
  }, [fetchPromotions]);

  const navi = [{ title: "หน้าแรก", path: "/" }, { title: "โปรโมชั่น" }];
  return (
    <InnerLayout>
      <Container maxWidth="lg">
        <BreadcrumpDefault items={navi} />
        <Typography variant="h1" sx={{ mb: "30px" }}>
          Promotions
        </Typography>
        <Grid container spacing={3}>
          {promotions.length > 0
            ? promotions.map((item: any, index: number) => {
                return (
                  <Grid item sm={4} xs={12} key={index}>
                    <CardPromotions
                      slug={item.slug}
                      image={item.thumb}
                      name={item.title}
                      description={item.detail.replace(/(<([^>]+)>)/gi, "")}
                    />
                  </Grid>
                );
              })
            : "ยังไม่มีโปรโมชั่น"}
        </Grid>
      </Container>
    </InnerLayout>
  );
};

export default PromotionPage;
