import { Box, Grid, Hidden, Theme, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import prefix from "utils/path";
import { getGoldPrice } from "utils/api";
import { get } from "lodash";
import Link from "components/Link";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginBottom: 60,
    [theme.breakpoints.down("sm")]: {
      marginBottom: 30,
    },
    "& .bannerGold": {
      lineHeight: 0,
      height: "100%",
      "& img": {
        maxWidth: "100%",
        height: "100%",
        objectFit: "cover",
      },
    },
    "& .contentGold": {
      textAlign: "center",
      backgroundImage: `url(${prefix}/images/bg_gold.png)`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "auto",
    },
  },
}));

const SectionGold = () => {
  const [goldPrice, setGoldPrice] = useState({});
  const classes = useStyles();
  useEffect(() => {
    getGoldPrice().then((res: any) => {
      const gold = res.response;
      setGoldPrice(gold);
    });

    const interval = setInterval(() => {
      getGoldPrice().then((res: any) => {
        const gold = res.response;
        setGoldPrice(gold);
      });
    }, 1800000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={classes.root}>
      <Grid container spacing={0}>
        <Hidden smDown>
          <Grid
            item
            lg={8}
            sm={6}
            xs={12}
            data-aos="fade-right"
            data-aos-duration="1800"
          >
            <Box className="bannerGold">
              <img src={`${prefix}/images/section_gold.jpg`} alt="" />
            </Box>
          </Grid>
        </Hidden>
        <Grid
          item
          lg={4}
          sm={6}
          xs={12}
          data-aos="fade-left"
          data-aos-duration="1800"
        >
          <Box
            className="contentGold"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "100%",
              position: "relative",
            }}
          >
            <Typography
              variant="h1"
              sx={{ fontWeight: { lg: 400, sm: 600 }, pt: "20px" }}
            >
              GOLD PRICE TODAY
            </Typography>
            <Typography sx={{ mb: "15px" }}>
              {get(goldPrice, "date", "")} {get(goldPrice, "update_time", "")}
            </Typography>
            <Typography variant="h3" component="p" sx={{ color: "#419547" }}>
              {get(goldPrice, "price.gold_bar.buy", "•••")}
            </Typography>
            <Typography sx={{ mb: "20px" }}>ราคาทองแท่งขายออก(บาท)</Typography>
            <Typography variant="h3" component="p" sx={{ color: "#419547" }}>
              {get(goldPrice, "price.gold_bar.sell", "•••")}
            </Typography>
            <Typography sx={{ mb: "20px", pb: "20px" }}>
              ราคาทองแท่งรับซื้อ(บาท)
            </Typography>
            {/* <Typography variant="h3" component="p" sx={{ color: "#419547" }}>
              {get(goldPrice, "price.gold.buy", "•••")}
            </Typography>
            <Typography sx={{ mb: "20px", pb: "20px" }}>
              ราคาขายออกทองรูปพรรณ(บาท)
            </Typography> */}
            <Typography
              sx={{
                position: "absolute",
                bottom: 5,
                right: 10,
                fontSize: "10px !important",
              }}
            >
              อ้างอิงจากเว็บ{" "}
              <Link
                href="https://www.goldtraders.or.th/"
                target="_blank"
                style={{ fontWeight: 400 }}
              >
                https://www.goldtraders.or.th/
              </Link>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </section>
  );
};

export default SectionGold;