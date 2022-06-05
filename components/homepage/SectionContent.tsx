import { Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ButtonTransform from "components/ButtonTransform";
import CardContent from "components/CardContent";
import { mockcontent } from "mock/mockcontent";
import router from "next/router";
import React, { useEffect, useState } from "react";
import { fetchContent } from "utils/api";

const useStyles = makeStyles(() => ({ root: {} }));

const SectionContent = () => {
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
        <Typography variant="h2" align="center" sx={{ mb: "30px" }}>
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
        <ButtonTransform
          title="VIEW ALL CONTENTS"
          onClick={() => router.push("/contents")}
        />
      </Container>
    </section>
  );
};

export default SectionContent;
