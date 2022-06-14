import { Box, Container, Grid, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Link from "components/Link";
import React from "react";
import prefix from "utils/path";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    "& .socail": {
      height: 40,
      display: "flex",
      lineHeight: 0,
      margin: "0 10px",
      [theme.breakpoints.down("md")]: {
        height: 30,
        margin: "0 6px",
      },
      "& img": {
        width: "100%",
        height: "100%",
      },
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box
        sx={{
          backgroundImage: `url(${prefix}/images/bg_footer.png)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "auto 100%",
          height: { md: 280, sm: "100%" },
          padding: { lg: 0, xs: "30px 0" },
        }}
      >
        <Container maxWidth="lg" sx={{ height: "100%" }}>
          <Grid
            container
            spacing={3}
            alignItems="center"
            sx={{ height: "100%" }}
          >
            <Grid item md sm={12} xs={12}>
              <Box sx={{ maxWidth: 250, margin: { xs: "0 auto", md: 0 } }}>
                <img
                  src={`${prefix}/images/logo_footer.svg`}
                  alt=""
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
            </Grid>
            <Grid
              item
              md={5}
              sm={12}
              xs={12}
              sx={{ textAlign: { md: "left", xs: "center" } }}
            >
              <Typography sx={{ color: "#fff" }} gutterBottom>
                ห้างเพชรทองชัยเฉลิม ตราดาว
              </Typography>
              <Typography sx={{ color: "#fff" }} gutterBottom>
                ที่อยู่: 131/5-6 ถ.นิตโย ต.หมากแข้ง อ.เมือง จ.อุดรธานี
              </Typography>
              <Typography sx={{ color: "#fff" }} gutterBottom>
                เบอร์ติดต่อ :{" "}
                <Link href="tel:042245750" style={{ color: "#fff" }}>
                  042-245750
                </Link>{" "}
                ,{" "}
                <Link href="tel:0885605601" style={{ color: "#fff" }}>
                  088-5605601
                </Link>
              </Typography>
              <Typography sx={{ color: "#fff" }}>
                จันทร์-เสาร์ 09:00-17:30
              </Typography>
            </Grid>
            <Grid item md sm={12} xs={12}>
              <Typography
                align="center"
                sx={{
                  fontSize: { md: 20, xs: 16 },
                  lineHeight: "30px",
                  color: "#fff",
                  fontWeight: 500,
                  mb: "10px",
                  display: { md: "block", xs: "none" },
                }}
              >
                FOLLOW US
              </Typography>
              <Box display="flex" alignItems="center" justifyContent="center">
                <Link
                  href="https://www.facebook.com/kosoltae"
                  target="_blank"
                  className="socail"
                >
                  <img src={`${prefix}/images/icon_facebook.svg`} alt="" />
                </Link>
                <Link
                  href="https://www.facebook.com/kosoltae"
                  target="_blank"
                  className="socail"
                >
                  <img src={`${prefix}/images/icon_ins.svg`} alt="" />
                </Link>
                <Link
                  href="https://page.line.me/yjb8773a?openQrModal=true"
                  target="_blank"
                  className="socail"
                >
                  <img src={`${prefix}/images/icon_line.svg`} alt="" />
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box>
        <Container maxWidth="lg">
          <Typography
            variant="body2"
            display="flex"
            alignItems="center"
            justifyContent="center"
            align="center"
            sx={{
              bgcolor: "#fff",
              minHeight: 40,
              padding: { xs: "10px 0" },
            }}
          >
            Copyright 2022 Chaichalerm goldsmith & jewelry. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
