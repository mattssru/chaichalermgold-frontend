import { Box, Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import BreadcrumpDefault from "components/BreadCrumpDefault";
import router from "next/router";
import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import { InnerLayout } from "components/layouts/InnerLayout";
import "react-image-gallery/styles/css/image-gallery.css";
import Slider from "react-slick";
import prefix from "utils/path";

const useStyles = makeStyles((theme: any) => ({
  root: {
    marginTop: "50px",
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
      },
    },
    "& .section_1": {
      backgroundColor: "#f2dbe4",
      padding: "50px",
      marginTop: "50px",
    },
    "& .section_2": {
      backgroundColor: "#EDEDED",
      padding: "50px",
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
    "& .sliderThumnail": {
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "& .labelSign": {
        height: "50px",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        width: "200px",
        bottom: "-25px",
        position: "absolute",
        background: "#3c3c3c",
        color: "#ede7d5",
        borderRadius: "15px",
      },
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
          height: "100%",
          objectFit: "cover",
          borderRadius: 10,
        },
      "& .image-gallery-thumbnail+.image-gallery-thumbnail": {
        marginLeft: 5,
      },
      "& .image-gallery-thumbnail.active, .image-gallery-thumbnail:focus": {
        opacity: 1,
      },
      "& .image-gallery-thumbnail .image-gallery-thumbnail-inner": {
        height: 90,
        [theme.breakpoints.down("md")]: {
          height: 70,
        },
      },
      "& .image-gallery-thumbnail": {
        width: 90,
        height: "100%",
        opacity: "0.6",
        border: "none",
        [theme.breakpoints.down("md")]: {
          width: 70,
        },
      },
      "& .image-gallery-thumbnails .image-gallery-thumbnails-container": {
        textAlign: "left",
      },
      "& .image-gallery-left-nav .image-gallery-svg, .image-gallery-right-nav .image-gallery-svg":
        {
          height: 30,
          [theme.breakpoints.down("sm")]: {
            height: 40,
          },
        },
      "& .image-gallery-left-nav, .image-gallery-right-nav": {
        padding: 0,
      },
    },
    "& .section_3": {
      margin: "50px 0 20px",
      "& .imageBar": {
        "& img": {
          width: "100%",
        },
      },
      "& .imgInBar": {
        padding: "10px",
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
          <Typography className="title" variant="h2">
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
              <Grid item sm={4} xs={12}>
                <Box className="sliderThumnail">
                  <ImageGallery
                    showFullscreenButton={false}
                    showPlayButton={false}
                    items={designImages}
                    showThumbnails={false}
                    showNav={false}
                    autoPlay
                    slideInterval={2000}
                  />
                  <Box className="labelSign">สั่งทำ/ออกแบบ</Box>
                </Box>
              </Grid>
              <Grid item sm={4} xs={12}>
                <Box className="sliderThumnail">
                  <ImageGallery
                    showFullscreenButton={false}
                    showPlayButton={false}
                    items={weddingImages}
                    showThumbnails={false}
                    showNav={false}
                    autoPlay
                    slideInterval={2000}
                  />
                  <Box className="labelSign">ปรึกษา Wedding</Box>
                </Box>
              </Grid>
              <Grid item sm={4} xs={12}>
                <Box className="sliderThumnail">
                  <ImageGallery
                    showFullscreenButton={false}
                    showPlayButton={false}
                    items={designImages}
                    showThumbnails={false}
                    showNav={false}
                    autoPlay
                    slideInterval={2000}
                  />
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
                  <img src={`${prefix}/images/pre_wedding_01.jpeg`} alt="" />
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
          <Slider {...settings}>
            <div className="imageBar">
              <img src="/images/wedding-bar.png" />
            </div>
            <div className="imageBar">
              <img src="/images/wedding-bar.png" />
            </div>
            <div className="imageBar">
              <img src="/images/wedding-bar.png" />
            </div>
            <div className="imageBar">
              <img src="/images/wedding-bar.png" />
            </div>
          </Slider>
        </Box>
      </Box>
    </InnerLayout>
  );
};

export default Wedding;