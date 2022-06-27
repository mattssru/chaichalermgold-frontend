import { Container, Grid, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect } from "react";
import prefix from "utils/path";
import { CardRecommend } from "..";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginBottom: 60,
    [theme.breakpoints.down("sm")]: {
      marginBottom: 40,
    },
    // "& .slick-prev::before, .slick-next::before": {
    //   content: '""',
    //   backgroundRepeat: "no-repeat",
    // },
    // "& .slick-prev": {
    //   backgroundImage: `url(${prefix}/images/arrow_left.svg)`,
    //   width: 30,
    //   height: 30,
    //   left: -20,
    // },
    // "& .slick-next": {
    //   backgroundImage: `url(${prefix}/images/arrow_right.svg)`,
    //   width: 30,
    //   height: 30,
    //   right: -20,
    // },
  },
}));

const data = [
  {
    href: "",
    image: `${prefix}/images/recommend_01.jpg`,
  },
  {
    href: "#",
    image: `${prefix}/images/recommend_02.jpg`,
  },
  {
    href: "#",
    image: `${prefix}/images/recommend_03.jpg`,
  },
  // {
  //   href: "#",
  //   image: `${prefix}/images/product_02.jpg`,
  // },
  // {
  //   href: "#",
  //   image: `${prefix}/images/product_06.jpg`,
  // },
];
const SectionRecommend = () => {
  const classes = useStyles();
  return (
    <section
      className={classes.root}
      data-aos="zoom-in"
      data-aos-duration="1000"
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          align="center"
          sx={{ mb: { xs: "2rem", md: "2.5rem" } }}
        >
          Recommend
        </Typography>

        <Grid container spacing={3}>
          {data.map((item: any, index: number) => {
            return (
              <Grid item sm={4} xs={12} key={index}>
                <CardRecommend href={item.href} image={item.image} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </section>
  );
};

export default SectionRecommend;
