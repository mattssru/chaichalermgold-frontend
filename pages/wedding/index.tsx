import { Box, Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import BreadcrumpDefault from "components/BreadCrumpDefault";
import router from "next/router";
import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import { InnerLayout } from "components/layouts/InnerLayout";
import "react-image-gallery/styles/css/image-gallery.css";

const useStyles = makeStyles((theme: any) => ({
  root: {
    "& p": {
      "& img": {
        width: "auto",
        height: "auto",
        maxWidth: "100%",
        maxHeight: "100%",
        objectFit: "cover",
      },
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
];

const weddingImages = [
  {
    original: "/images/pre_wedding_06.jpeg",
    thumbnail: "/images/pre_wedding_06.jpeg",
  },
  {
    original: "/images/pre_wedding_07.jpeg",
    thumbnail: "/images/pre_wedding_07.jpeg",
  },
  {
    original: "/images/pre_wedding_01.jpeg",
    thumbnail: "/images/pre_wedding_01.jpeg",
  },
  {
    original: "/images/pre_wedding_04.jpeg",
    thumbnail: "/images/pre_wedding_04.jpeg",
  },
];

const reviewDesign = [
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

const Wedding = () => {
  const classes = useStyles();

  return (
    <InnerLayout>
      <Container maxWidth="lg" className={classes.root}>
        <Box className={"background"}>
          <Grid spacing={4} data-aos="zoom-in" data-aos-duration="1500">
            <Box>
              <Typography align="center">
                เป็นที่ปรึกษา One Stop Service เรื่อง Wedding
                แห่งแรกในจังหวัดอุดรธานี ตั้งแต่ขั้นตอนแรกเริ่ม จนถึง จบงาน
              </Typography>
              <Typography align="center" variant="h2">
                “เพราะวันสำคัญของคุณ คือวันสำคัญที่สุดของเรา”
              </Typography>
              <Typography align="center">
                ด้วยความใส่ใจและประณีตพิถีพิถันจาก
                การเดินทางผ่านการถ่ายทอดความรู้ในธุรกิจ
                ของครอบครัวจากรุ่นสู่รุ่น ตลอด 30ปี
              </Typography>
              <Typography align="center">
                กับการ Design เครื่องประดับรูปแบบที่มีความร่วมสมัย
                และคงความคลาสสิค
                จนได้รับความนิยมปากต่อปากของลูกค้าในจังหวัดอุดรธานีและใกล้เคียง
              </Typography>
            </Box>
          </Grid>
        </Box>
        <Grid
          container
          spacing={4}
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          <Grid item sm={6} xs={12}>
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
            </Box>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Typography align="center">
              Design แบบเครื่องประดับตามที่ลูกค้าต้องการ
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="h2">รีวิว</Typography>
        <Grid container spacing={4} data-aos="fade-up" data-aos-duration="1500">
          <Grid item sm={6} xs={12}>
            <Typography align="center">
              ภาพถ่ายพรีเวดดิ้งของ คุณโก้ และ คุณบุ๋ม "เพราะวันสำคัญของคุณ
              คือวันสำคัญที่สุดของเรา" ขอขอบคุณคุณโก้ และ
              คุณบุ๋มที่เชื่อใจในสินค้า และบริการของทางร้านนะครับ ขอบคุณครับ
            </Typography>
          </Grid>
          <Grid item sm={6} xs={12}>
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
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={4} data-aos="fade-up" data-aos-duration="1500">
          <Grid item sm={6} xs={12}>
            <Typography align="center">
              ทางร้านขอขอบคุณ K’Nut และ K’Best
              ที่ไว้ใจและชื่อชอบในสินค้าและบริการของทางร้านนะครับ
              ทางร้านก็ขอแสดงความยินดีกับว่าที่เจ้าบ่าว และเจ้าสาว ทั้งคู่มา ณ
              ที่นี้ด้วยนะครับ
            </Typography>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Box className="sliderThumnail">
              <ImageGallery
                showFullscreenButton={false}
                showPlayButton={false}
                items={reviewDesign}
                showThumbnails={false}
                showNav={false}
                autoPlay
                slideInterval={2000}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </InnerLayout>
  );
};

export default Wedding;
