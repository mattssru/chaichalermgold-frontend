import { Box, Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ButtonTransform from "components/ButtonTransform";
import router from "next/router";
import React from "react";
import prefix from "utils/path";

const useStyles = makeStyles((theme: any) => ({
  root: {
    height: "100vh",
    marginBottom: 50,
    backgroundImage: `url(${prefix}/images/banner_intro.jpg)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "50% 50%",
    [theme.breakpoints.down("sm")]: {
      height: "100vh",
      backgroundPosition: "70% 50%",
    },
    "& .MuiContainer-root": {
      height: "100%",
    },
    "& .banner": {
      height: 845,
      width: "100%",
      position: "absolute",
      top: 0,
      left: 0,
      "& img": {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "83%",
      },
    },
    "& .homData": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      height: "100%",
      "& h1": {
        fontSize: "54px",
        lineHeight: "70px",
        marginBottom: 20,
        fontWeight: 700,
        [theme.breakpoints.down("sm")]: {
          textAlign: "center",
          fontSize: 50,
          lineHeight: "64px",
        },
      },
      "& p": {
        fontSize: 20,
        lineHeight: "26px",
        fontWeight: 400,
        color: "rgba(255, 255, 255, 0.97)",
        letterSpacing: "1.2",
        [theme.breakpoints.down("sm")]: {
          textAlign: "center",
          fontSize: 16,
          lineHeight: "24px",
        },
      },
      "& button": {
        boxShadow: "none",
        margin: "30px 0 0 0",
        maxWidth: 250,
        // backgroundColor: "transparent",
        // border: "1px solid #fff",
        borderRadius: "8px !important",
        [theme.breakpoints.down("sm")]: {
          margin: "30px auto 0",
        },
      },
    },
  },
}));

const SectionIntro = () => {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      {/* <Box className="banner">
        <img src={`${prefix}/images/banner_01.jpg`} alt="" />
      </Box> */}
      <Container maxWidth="lg">
        <Box className="homData" position="relative">
          <Typography variant="h1" color="#fff">
            Chaichalerm <br />
            Goldsmith & Jewellery
          </Typography>
          <Typography variant="body2">
            “ เพราะวันสำคัญของคุณ คือวันสำคัญที่สุดของเรา ”
          </Typography>
          <ButtonTransform
            title="Contact"
            onClick={() => router.push("/contact")}
          />
        </Box>
      </Container>
    </section>
  );
};

export default SectionIntro;
