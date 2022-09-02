import { CardContent } from "@components/*";
import { makeStyles } from "@mui/styles";
import { Container, Grid, Typography, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { fetchContent } from "utils/api";
import BreadcrumpDefault from "components/BreadCrumpDefault";
import { InnerLayout } from "components/layouts/InnerLayout";

const useStyles = makeStyles((theme: any) => ({
  noContent:{
    height: '50vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    fontSize: 26,
    color: '#7f7171',
    fontWeight: 700,
  }
}));

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
          {contents.length > 0
            ? contents.map((item: any, index: number) => {
                return (
                  <Grid item sm={4} xs={12} key={index}>
                    <CardContent
                      slug={item.slug}
                      image={item.thumb}
                      name={item.title}
                      description={item.detail.replace(/(<([^>]+)>)/gi, "")}
                    />
                  </Grid>
                );
              })
            : <Box className={classes.noContent}>ยังไม่มีบทความใหม่</Box>}
        </Grid>
      </Container>
    </InnerLayout>
  );
};

export default ContentPage;
