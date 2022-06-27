import { Box, Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import prefix from "utils/path";

const useStyles = makeStyles(() => ({
  root: {
    // backgroundColor: "#1b1f22",
    // padding: "90px 0",
    height: 840,
    marginBottom: 50,
    backgroundImage: `url(${prefix}/images/banner_intro.jpg)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "50% 50%",
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
        fontSize: "2.5rem",
        lineHeight: "140%",
        marginBottom: 5,
        fontWeight: 600,
      },
      "& h2": {
        fontSize: "2rem",
        lineHeight: 1.6,
        marginBottom: 15,
      },
      "& p": {
        fontWeight: 400,
        color: "hsl(355, 4%, 75%)",
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
            CHAICHALERM <br />
            GoldSmith & Jewellery
          </Typography>
          {/* <Typography variant="h1" color="#fff">
                ห้างเพชรทองเฉลิมชัย
                <br />
                ตราดาว
              </Typography> */}
          {/* <Typography variant="h2" color="#fff">
                Wedding & Engagement
              </Typography> */}
          <Typography variant="subtitle1" color="#fff">
            "เพราะวันสำคัญของคุณ <br />
            คือวันสำคัญที่สุดของเรา"
          </Typography>
        </Box>
      </Container>
    </section>
  );
};

export default SectionIntro;
