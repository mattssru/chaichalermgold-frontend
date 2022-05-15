import { Box, Theme } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import prefix from "utils/path";
import Slider from "react-slick";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    lineHeight: 0,
    marginBottom: 50,
    [theme.breakpoints.down("sm")]: {
      marginBottom: 30,
    },
    "& .imgSlider": {
      position: "relative",
      width: "100%",
      paddingTop: "45%",
      [theme.breakpoints.down("sm")]: {
        paddginTop: "47%",
      },
      "& img": {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
      },
    },
    "& .slick-slider": {
      "& .MuiSvgIcon-root": {
        backgroundColor: "#707b80",
        width: 30,
        height: 30,
        borderRadius: "50%",
        color: "#fff",
        [theme.breakpoints.down("sm")]: {
          width: 20,
          height: 20,
        },
      },
      "& .slick-next": {
        right: 25,
        [theme.breakpoints.down("sm")]: {
          right: 15,
        },
        "&::before": {
          display: "none",
        },
      },
      "& .slick-prev": {
        left: 15,
        zIndex: 1,
        "&::before": {
          display: "none",
        },
      },
    },
  },
}));

const data = [
  {
    image: `${prefix}/images/banner.jpg`,
  },
  {
    image: `${prefix}/images/banner.jpg`,
  },
  {
    image: `${prefix}/images/banner.jpg`,
  },
];
function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <NavigateNextIcon />
    </div>
  );
}
function PrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <NavigateBeforeIcon />
    </div>
  );
}

const SectionBanner = () => {
  const classes = useStyles();
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <section className={classes.root}>
      <Slider {...settings}>
        {data.map((item: any, index: number) => {
          return (
            <div className="imgSlider" key={index}>
              <img src={item.image} alt="" />
            </div>
          );
        })}
      </Slider>
    </section>
  );
};

export default SectionBanner;
