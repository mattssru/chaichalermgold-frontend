import { CardContent, Headline } from "@components/*";
import { makeStyles } from "@mui/styles";
import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import prefix from "utils/path";
import { mockcontent } from "mock/mockcontent";
import { fetchContent } from "utils/api";

const useStyles = makeStyles(() => ({
  root: {
    paddingTop: 50,
  },
}));

const ContentPage = () => {
  const classes = useStyles();
  const [contents, setContent] = useState([]);

  useEffect(() => {
    const fetch: any = async () => {
      const data = await fetchContent();
      setContent(data);
      return data;
    };
    fetch();
  }, [fetchContent]);

  return (
    <section className={classes.root}>
      <Container maxWidth="lg">
        <Typography variant="h1" sx={{ mb: "30px" }}>
          CONTENTS
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
    </section>
  );
};

export default ContentPage;