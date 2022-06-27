import { CardContent } from "@components/*";
import { makeStyles } from "@mui/styles";
import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { fetchContent } from "utils/api";
import BreadcrumpDefault from "components/BreadCrumpDefault";
import { InnerLayout } from "components/layouts/InnerLayout";

const useStyles = makeStyles((theme: any) => ({}));

const ContentPage = () => {
  const classes = useStyles();
  const [contents, setContent] = useState([]);

  useEffect(() => {
    const fetch: any = async () => {
      const data: any = await fetchContent();
      setContent(data);
      return data;
    };
    fetch();
  }, [fetchContent]);

  const navi = [{ title: "หน้าแรก", path: "/" }, { title: "บทความ" }];
  return (
    <InnerLayout>
      <Container maxWidth="lg">
        <BreadcrumpDefault items={navi} />
        <Typography variant="h1" sx={{ mb: "30px" }}>
          บทความ
        </Typography>
        <Grid container spacing={3}>
          {contents.map((item: any, index: number) => {
            return (
              <Grid item sm={4} xs={12} key={index}>
                <CardContent
                  slug={item.slug}
                  image={item.image}
                  name={item.name}
                  description={item.description}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </InnerLayout>
  );
};

export default ContentPage;
