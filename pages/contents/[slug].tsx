import { Box, Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState, useEffect } from "react";
import { fetchContent, getContent } from "utils/api";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { CardContent, ShareSocial } from "@components/*";
import router from "next/router";

const useStyles = makeStyles((theme: any) => ({
  root: {
    padding: "50px 0",
    [theme.breakpoints.down("md")]: {
      padding: "30px 0",
    },
    "& .imageContent": {
      "& img": {
        display: "block",
        maxWidth: "100%",
        width: "100%",
        height: "auto",
      },
    },
    "& .nav-link": {
      textDecoration: "none",
    },
    "& .active:after": {
      content: " (current page)",
    },
  },
}));

// interface IContent {
//   name: string | "";
//   description: string | "";
//   image: string | "";
//   type: string | "";
//   id: number | 1;
// }

const ContentDetailPage = () => {
  const classes = useStyles();
  const [content, setContent] = useState<any>();
  const [listContent, setListContent] = useState([]);

  useEffect(() => {
    const { slug } = router.query;
    const fetch = async () => {
      const data = await getContent(slug);
      setContent(data);
      return data;
    };
    fetch();
  }, [getContent]);

  useEffect(() => {
    const fetch = async () => {
      const { slug } = router.query;
      const data: any = await fetchContent();
      setListContent(data.filter((content: any) => content.slug !== slug));
      return data;
    };
    fetch();
  }, [fetchContent]);

  // const url = typeof window !== "undefined" ? window.location.href : "";
  const url =
    "https://www.chaichalermgold.com/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%A0%E0%B8%97/%e0%b8%81%e0%b8%b3%e0%b9%84%e0%b8%a5965";
  return (
    <section className={classes.root}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
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
                <ShareSocial url={url} />
              </Grid>
            </Grid>

            <Box className="imageContent" sx={{ lineHeight: 0, mb: "30px" }}>
              <img src={content?.image} alt={content?.name} />
            </Box>
            <Typography variant="body1" sx={{ mb: "20px" }}>
              {content?.description}
            </Typography>
          </Grid>
          <Grid item md={3} sm={12} xs={12}>
            <Typography variant="h4" sx={{ mb: "20px" }}>
              More Content
            </Typography>
            <Grid container spacing={2}>
              {listContent.map((item: any, index: number) => {
                return (
                  <Grid item md={12} sm={6} xs={6} key={index}>
                    <CardContent
                      slug={item.slug}
                      image={item.image}
                      name={item.name}
                      description={item.description}
                      fontsize="18px"
                      lineheight="24px"
                      sizedes="14px"
                      heightdes="63px"
                      mb="0"
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default ContentDetailPage;
