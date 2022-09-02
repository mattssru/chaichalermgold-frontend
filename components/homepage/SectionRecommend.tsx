import { Container, Grid, Theme, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"
import React, { useEffect, useState } from "react"
import { fetchProduct } from "utils/api"
import prefix from "utils/path"
import { CardRecommend } from ".."

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
}))

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
]

const SectionRecommend = () => {
  const [products, setProduct] = useState([])

  useEffect(() => {
    const fetch = async () => {
      const data = await fetchProduct()
      setProduct(data.slice(0, 3))
      return data
    }
    fetch()
  }, [fetchProduct])
  const classes = useStyles()
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
          New Arrival
        </Typography>

        <Grid container spacing={3}>
          {products.map((item: any, index: number) => {
            return (
              <Grid item sm={4} xs={12} key={index}>
                <CardRecommend
                  productId={item.id}
                  image={item.thumb}
                  name={item.name}
                />
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </section>
  )
}

export default SectionRecommend
