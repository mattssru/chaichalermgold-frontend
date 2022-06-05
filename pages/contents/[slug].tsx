import { Headline, Share } from "@components/*";
import { Box, Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import router from "next/router";
import React, { useState, useEffect } from "react";
import {
  FacebookIcon,
  FacebookShareButton,
  LineIcon,
  LineShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";
import { getContent } from "utils/api";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";

const useStyles = makeStyles(() => ({
  root: {
    paddingTop: 50,
    "& .imageContent": {
      "& img": {
        display: "block",
        maxWidth: "100%",
        width: "100%",
        height: "auto",
      },
    },
  },
}));

interface IContent {
  name: string | "";
  description: string | "";
  image: string | "";
  type: string | "";
  id: number | 1;
}

const ContentDetailPage = () => {
  const classes = useStyles();
  const [content, setContent] = useState<IContent>();

  useEffect(() => {
    const { slug } = router.query;
    const fetch: any = async () => {
      const data = await getContent(slug);
      setContent(data);
      return data;
    };
    fetch();
  }, [getContent]);

  // const url = typeof window !== "undefined" ? window.location.href : "";
  const url =
    "https://www.chaichalermgold.com/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%A0%E0%B8%97/%e0%b8%81%e0%b8%b3%e0%b9%84%e0%b8%a5965";
  return (
    <section className={classes.root}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item md={9} sm={12} xs={12}>
            <Typography variant="h1" sx={{ mb: "10px" }}>
              {content?.name}
            </Typography>
            <Grid container spacing={0} alignItems="center" sx={{ mb: "30px" }}>
              <Grid item sm={6} xs={12}>
                <Box
                  display="flex"
                  alignItems="center"
                  sx={{ mb: { xs: "15px", sm: "0" } }}
                >
                  <AccessTimeFilledIcon color="secondary" />
                  <Typography color="secondary" sx={{ ml: "10px" }}>
                    31 พฤภาคม 2565
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                sm={6}
                xs={12}
                sx={{ textAlign: { xs: "left", sm: "right" } }}
              >
                <Share url={url} url2={url} />
              </Grid>
            </Grid>

            <Box className="imageContent">
              <img src={content?.image} alt={content?.name} />
            </Box>
            <Typography variant="body1">{content?.description}</Typography>
          </Grid>
          <Grid item md={9} sm={12} xs={12}></Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default ContentDetailPage;
