import { Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ButtonTransform from "components/ButtonTransform";
import CardContent from "components/CardContent";
import router from "next/router";
import React from "react";
import prefix from "utils/path";

const useStyles = makeStyles(() => ({ root: {} }));

const data = [
  {
    href: "/",
    image: `${prefix}/images/content_01.jpg`,
    name: "Content Name",
    description: "Almost before we knew it, we had left the ground.",
  },
  {
    href: "/",
    image: `${prefix}/images/content_02.jpg`,
    name: "Content Name",
    description: "Almost before we knew it, we had left the ground.",
  },
  {
    href: "/",
    image: `${prefix}/images/content_01.jpg`,
    name: "Content Name",
    description: "Almost before we knew it, we had left the ground.",
  },
];

const SectionContent = () => {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" sx={{ mb: "30px" }}>
          CONTENTS
        </Typography>
        <Grid container spacing={3}>
          {data.map((item: any, index: number) => {
            return (
              <Grid item sm={4} xs={12} key={index}>
                <CardContent
                  href={item.href}
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
