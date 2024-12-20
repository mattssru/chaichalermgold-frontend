import { Container, Grid, Theme, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"
import React, { useEffect, useState } from "react"
import { ButtonTransform, CardProduct } from ".."
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt"
import router from "next/router"
import { fetchProduct } from "utils/api"

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: "#EDEDED",
    padding: "3rem 0",
    marginBottom: 50,
    [theme.breakpoints.down("sm")]: {
      padding: "2rem 0",
      marginBottom: 30,
    },
  },
}))

const SectionProduct = () => {
  const classes = useStyles()
  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetch = async () => {
      const data: any = await fetchProduct()
      setProducts(data.slice(0, 8))
      return data
    }
    fetch()
  }, [fetchProduct])

  return (
    <section className={classes.root}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          align="center"
          sx={{ mb: { xs: "2rem", md: "2.5rem" } }}
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          Products
        </Typography>
        <Grid container spacing={2}>
          {products.map((item: any, index: number) => {
            return (
              <Grid
                item
                lg={3}
                sm={4}
                xs={6}
                key={index}
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <CardProduct
                  productId={item.id}
                  image={item.thumb}
                  name={item.name}
                  price={item.price}
                  descriptions={item.descriptions}
                />
              </Grid>
            )
          })}
          {/* <Grid item sm={3}>
            <div>
              <img src={`${prefix}/images/product_01.jpg`} alt="" />
            </div>
          </Grid> */}
        </Grid>
        <ButtonTransform
          title="VIEW ALL PRODUCTS"
          onClick={() => router.push("/products")}
        />
      </Container>
    </section>
  )
}

export default SectionProduct
