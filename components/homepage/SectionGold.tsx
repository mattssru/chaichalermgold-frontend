import { Box, Grid, Hidden, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import prefix from "utils/path";

const useStyles = makeStyles((theme: any) => ({
  root: {
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
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <Grid container spacing={0}>
        <Hidden smDown>
          <Grid item lg={8} sm={6} xs={12}>
            <Box className="bannerGold">
              <img src={`${prefix}/images/section_gold.jpg`} alt="" />
            </Box>
          </Grid>
        </Hidden>
        <Grid item lg={4} sm={6} xs={12}>
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
            <Typography variant="h2" sx={{ fontWeight: 400, pt: "20px" }}>
              GOLD PRICE TODAY
            </Typography>
            <Typography sx={{ mb: "15px" }}>
              1 พฤษภาคม 2565 เวลา 09.21 น.
            </Typography>
            <Typography variant="h3" component="p" sx={{ color: "#419547" }}>
              30,850.00
            </Typography>
            <Typography sx={{ mb: "20px" }}>ราคาขายออก(บาท)</Typography>
            <Typography variant="h3" component="p" sx={{ color: "#419547" }}>
              30,750.00
            </Typography>
            <Typography sx={{ mb: "20px" }}>ราคารับซื้อ(บาท)</Typography>
            <Typography variant="h3" component="p" sx={{ color: "#419547" }}>
              31,350.00
            </Typography>
            <Typography sx={{ mb: "20px", pb: "20px" }}>
              ราคาขายออกทองรูปพรรณ(บาท)
            </Typography>
            <Typography
              sx={{
                position: "absolute",
                bottom: 5,
                right: 10,
                fontSize: "10px !important",
              }}
            >
              อ้างอิงจากเว็บ https://www.goldtraders.or.th/
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </section>
  );
};

export default SectionGold;
