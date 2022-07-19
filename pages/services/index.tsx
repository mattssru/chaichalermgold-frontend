import { Box, Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { InnerLayout } from "components/layouts/InnerLayout";
import "react-image-gallery/styles/css/image-gallery.css";
import prefix from "utils/path";
import { Fade, Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const useStyles = makeStyles((theme: any) => ({
  root: {
    marginTop: 50,
    [theme.breakpoints.down("sm")]: {
      marginTop: 30,
    },
    "& p": {
      "& img": {
        width: "auto",
        height: "auto",
        maxWidth: "100%",
        maxHeight: "100%",
        objectFit: "cover",
      },
    },
    "& .textAd": {
      height: "400px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    "& .label": {
      fontFamily: "Sriracha, cursive",
    },
    "& .textLabel": {
      display: "flex",
      justifyContent: "center",
      height: "100%",
      alignItems: "center",
      "& p": {
        fontSize: "22px",
        fontFamily: "IBM Plex Sans Thai, sans-serif",
        [theme.breakpoints.down("md")]: {
          fontSize: "18px",
        },
      },
    },
    "& .section_1": {
      backgroundColor: "#f2dbe4",
      padding: "25px 0 50px 0",
      marginTop: "50px",
    },
    "& .section_2": {
      background: "#e3e3e3",
      padding: "50px 0",
    },
    "& .background": {
      // backgroundColor: "#EDEDED",
      padding: "3rem 0",
      marginBottom: 50,
      height: "400px",
      [theme.breakpoints.down("sm")]: {
        padding: "2rem 0",
        marginBottom: 30,
      },
    },
    "& .explainText": {
      overflow: "hidden",
      borderRadius: "15px",
      width: "100%",
      height: "100%",
      "& img": {
        width: "100%",
        height: "100%",
      },
    },
    "& .fadeThumnail": {
      position: "relative",
      "& .each-fade": {
        height: 500,
        borderRadius: "15px",
        overflow: "hidden",
        [theme.breakpoints.down("md")]: {
          height: 350,
        },
        [theme.breakpoints.down("sm")]: {
          height: 450,
        },
        "& img": {
          width: "100%",
          height: "100%",
          objectFit: "cover",
        },
      },
      "& .react-slideshow-container .nav:last-of-type": {
        right: 15,
      },
      "& .react-slideshow-container .nav:first-of-type": {
        left: 15,
      },
    },
    "& .labelSign": {
      height: 50,
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
      width: 200,
      bottom: -25,
      left: "50%",
      position: "absolute",
      background: "#3c3c3c",
      color: "#ede7d5",
      borderRadius: 5,
      transform: "translate(-50%, 0)",
      zIndex: "1000",
      [theme.breakpoints.down("md")]: {
        width: 160,
      },
    },

    "& .sliderThumnail": {
      position: "relative",

      "& .image-gallery-slide": {
        height: 500,
        [theme.breakpoints.down("md")]: {
          height: 350,
        },
        [theme.breakpoints.down("sm")]: {
          height: 450,
        },
      },
      "& .image-gallery-slide .image-gallery-image, .image-gallery-thumbnail .image-gallery-thumbnail-image":
        {
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: 10,
        },
    },
    "& .section_3": {
      margin: "90px 0 20px",
      padding: "35px 35px 15px",
      backgroundColor: "#e9e2d9",
      position: "relative",
      "& .labelReview": {
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        width: 200,
        top: -25,
        left: "50%",
        position: "absolute",
        background: "#3c3c3c",
        color: "#ede7d5",
        borderRadius: 5,
        transform: "translate(-50%, 0)",
        zIndex: "1000",
        [theme.breakpoints.down("md")]: {
          width: 160,
        },
      },
      "& .imageBar": {
        display: "flex",
      },
      "& img": {
        width: "100%",
        objectFit: "cover",
        height: 300,
        borderRadius: 10,
        [theme.breakpoints.down("md")]: {
          height: 150,
        },
        [theme.breakpoints.down("sm")]: {
          height: 100,
        },
      },
      "& .imgInBar": {
        padding: "10px",
      },
      "& .react-slideshow-container+ul.indicators": {
        marginTop: "10px",
      },
    },
  },
}));
const designImages = [
  {
    original: "/images/design_01.jpeg",
    thumbnail: "/images/design_01.jpeg",
  },
  {
    original: "/images/design_02.jpeg",
    thumbnail: "/images/design_02.jpeg",
  },
  {
    original: "/images/section_gold.jpg",
    thumbnail: "/images/section_gold.jpg",
  },
  {
    original: "/images/design_03.jpeg",
    thumbnail: "/images/design_03.jpeg",
  },
  {
    original: "/images/design_05.jpeg",
    thumbnail: "/images/design_05.jpeg",
  },
  {
    original: "/images/design_06.jpeg",
    thumbnail: "/images/design_06.jpeg",
  },
];

const weddingImages = [
  {
    original: "/images/design_01.jpeg",
    thumbnail: "/images/design_01.jpeg",
  },
  {
    original: "/images/design_02.jpeg",
    thumbnail: "/images/design_02.jpeg",
  },
  {
    original: "/images/section_gold.jpg",
    thumbnail: "/images/section_gold.jpg",
  },
];
const fadeImages = [
  "/images/design_01.jpeg",
  "/images/design_02.jpeg",
  "/images/design-09.jpg",
];

const Wedding = () => {
  const classes = useStyles();
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    speed: 2000,
    autoplay: true,
  };
  return (
    <InnerLayout>
      <Box className={classes.root}>
        <Container maxWidth="lg">
          <Typography variant="h1" sx={{ mb: "30px" }}>
            Services
          </Typography>
        </Container>
        <Box className="section_1">
          <Container maxWidth="lg">
            <Grid
              container
              spacing={3}
              data-aos="zoom-in"
              data-aos-duration="1800"
            >
              <Grid item sm={4} xs={12} sx={{ mb: { xs: "20px", sm: 0 } }}>
                <Box className="fadeThumnail">
                  <Fade
                    autoplay={true}
                    infinite={true}
                    arrows={false}
                    canSwipe={true}
                    duration={1000}
                  >
                    {fadeImages.map((image: any, index: number) => {
                      return (
                        <div className="each-fade" key={index}>
                          <img src={image} />
                        </div>
                      );
                    })}
                  </Fade>
                  <Box className="labelSign">สั่งทำ/ออกแบบ</Box>
                </Box>
              </Grid>
              <Grid item sm={4} xs={12} sx={{ mb: { xs: "20px", sm: 0 } }}>
                <Box className="fadeThumnail">
                  <Fade
                    autoplay={true}
                    infinite={true}
                    arrows={false}
                    canSwipe={true}
                    duration={1000}
                  >
                    {fadeImages.map((image: any, index: number) => {
                      return (
                        <div className="each-fade" key={index}>
                          <img src={image} />
                        </div>
                      );
                    })}
                  </Fade>
                  <Box className="labelSign">งานแก้เครื่องประดับ</Box>
                </Box>
              </Grid>
              <Grid item sm={4} xs={12} sx={{ mb: { xs: "20px", sm: 0 } }}>
                <Box className="fadeThumnail">
                  <Fade
                    autoplay={true}
                    infinite={true}
                    arrows={false}
                    canSwipe={true}
                    duration={1000}
                  >
                    {fadeImages.map((image: any, index: number) => {
                      return (
                        <div className="each-fade" key={index}>
                          <img src={image} />
                        </div>
                      );
                    })}
                  </Fade>
                  <Box className="labelSign">One stop services</Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Box className="textAd" data-aos-duration="1800" data-aos="zoom-in">
          <Typography className="label" align="center" variant="h2">
            “เพราะวันสำคัญของคุณ{" "}
            <span style={{ display: "inline-block" }}>
              คือวันสำคัญที่สุดของเรา”
            </span>
          </Typography>
        </Box>
        <Box className="section_2">
          <Container maxWidth="lg">
            <Grid container spacing={3}>
              <Grid
                data-aos="fade-right"
                data-aos-duration="1800"
                item
                sm={6}
                xs={12}
              >
                <Box className="explainText">
                  <img src={`${prefix}/images/place-09.jpg`} alt="" />
                  {/* <ImageGallery
                    showFullscreenButton={false}
                    showPlayButton={false}
                    items={designImages}
                    showThumbnails={false}
                    showNav={false}
                    autoPlay
                    slideInterval={2000}
                  /> */}
                </Box>
              </Grid>
              <Grid
                data-aos="fade-left"
                data-aos-duration="1800"
                item
                sm={6}
                xs={12}
              >
                <Box className="textLabel">
                  <Typography align="center">
                    <span style={{ display: "inline-block" }}>
                      ด้วยความใส่ใจ และประณีตพิถีพิถัน จากการเดินทาง
                      ผ่านการถ่ายทอดความรู้ในธุรกิจของครอบครัว
                      จากรุ่นสู่รุ่นตลอด 30 ปี{" "}
                    </span>
                    <span style={{ display: "inline-block" }}>
                      กับการ Design เครื่องประดับ ที่มีความร่วมสมัย
                      และคงความคลาสสิค จนได้รับความนิยมปากต่อปากของลูกค้า
                      ในจังหวัดอุดรธานีและใกล้เคียง
                    </span>
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Box data-aos="fade-up" data-aos-duration="1800" className="section_3">
          <Box className="labelReview">Review</Box>

          <Slide
            indicators={true}
            autoplay={true}
            infinite={true}
            arrows={false}
            canSwipe={true}
            duration={2000}
          >
            {/* children here */}
            <Grid container spacing={3}>
              <Grid item sm={3} xs={3}>
                <img src="/images/design_01.jpeg" />
              </Grid>
              <Grid item sm={3} xs={3}>
                <img src="/images/design_02.jpeg" />
              </Grid>
              <Grid item sm={3} xs={3}>
                <img src="/images/design_04.jpeg" />
              </Grid>
              <Grid item sm={3} xs={3}>
                <img src="/images/design_06.jpeg" />
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item sm={3} xs={3}>
                <img src="/images/design_02.jpeg" />
              </Grid>
              <Grid item sm={3} xs={3}>
                <img src="/images/design_05.jpeg" />
              </Grid>
              <Grid item sm={3} xs={3}>
                <img src="/images/design_06.jpeg" />
              </Grid>
              <Grid item sm={3} xs={3}>
                <img src="/images/design-09.jpg" />
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item sm={3} xs={3}>
                <img src="/images/design_06.jpeg" />
              </Grid>
              <Grid item sm={3} xs={3}>
                <img src="/images/design_05.jpeg" />
              </Grid>
              <Grid item sm={3} xs={3}>
                <img src="/images/design_02.jpeg" />
              </Grid>
              <Grid item sm={3} xs={3}>
                <img src="/images/design_01.jpeg" />
              </Grid>
            </Grid>
          </Slide>
        </Box>
      </Box>
    </InnerLayout>
  );
};

export default Wedding;
