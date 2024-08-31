import { Box, Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState, useEffect } from "react";
import { getPost } from "utils/api";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import CardPromotions from "@components/CardPromotions";
import ShareSocial from "@components/ShareSocial";
import router from "next/router";
import BreadcrumpDefault from "components/BreadCrumpDefault";
import { InnerLayout } from "components/layouts/InnerLayout";
import { get } from "lodash";

const useStyles = makeStyles((theme: any) => ({
  root: {
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
      promotion: " (current page)",
    },
    "& .tags": {
      display: "flex",
      alignItems: "center",
      color: "#7e7e7e",
      "& .tag": {
        border: "1px solid #a1a1a1",
        borderRadius: "3px",
        padding: "10px",
        marginLeft: "5px",
        color: "#7e7e7e",
      },
    },
  },
}));

const ContentDetailPage = () => {
  const classes = useStyles();
  const [promotion, setPromotion] = useState<any>();

  useEffect(() => {
    const { slug } = router.query;
    const fetch = async () => {
      const data = await getPost(slug);
      setPromotion(data);
      return data;
    };
    fetch();
  }, [getPost]);
  // useEffect(() => {
  //   const fetch = async () => {
  //     const { slug } = router.query;
  //     const data: any = await fetchContent();
  //     setListContent(data.filter((promotion: any) => promotion.slug !== slug));
  //     return data;
  //   };
  //   fetch();
  // }, [fetchContent]);

  const navi = [
    { title: "หน้าแรก", path: "/" },
    { title: "โปรโมชั่น", path: "/promotions" },
    { title: promotion?.title },
  ];
  const url = typeof window !== "undefined" ? window.location.href : "";
  // const url =
  //   "https://www.chaichalermgold.com/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%A0%E0%B8%97/%e0%b8%81%e0%b8%b3%e0%b9%84%e0%b8%a5965";
  return (
    <InnerLayout>
      <Container maxWidth="lg" className={classes.root}>
        <BreadcrumpDefault items={navi} />
        <Grid container spacing={4}>
          <Grid item md={9} sm={12} xs={12}>
            <Typography variant="h1" sx={{ mb: "10px" }}>
              {promotion?.title}
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
                    {promotion?.publish_date}
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
              <img src={promotion?.thumb} alt={promotion?.title} />
            </Box>
            <Typography
              dangerouslySetInnerHTML={{ __html: promotion?.detail }}
              sx={{
                color: "#7e7e7e",
                mb: "10px",
                marginBottom: "25px",
                borderBottom: "1px solid #e7e7e7",
                paddingBottom: "20px",
              }}
            ></Typography>
            {promotion?.tags.length > 0 && (
              <Box className="tags" sx={{ lineHeight: 0, mb: "30px" }}>
                Tags:{" "}
                {promotion?.tags.map((tag: any, index: number) => {
                  return (
                    <Box className="tag" key={index}>
                      {tag}
                    </Box>
                  );
                })}
              </Box>
            )}
          </Grid>
          <Grid item md={3} sm={12} xs={12}>
            <Typography variant="h4" sx={{ mb: "20px" }}>
              More Content
            </Typography>
            <Grid container spacing={2}>
              {get(promotion, "related", []).map((item: any, index: number) => {
                return (
                  <Grid item md={12} sm={6} xs={6} key={index}>
                    <CardPromotions
                      slug={item.slug}
                      image={item.thumb}
                      name={item.title}
                      description={item.detail.replace(/(<([^>]+)>)/gi, "")}
                      fontsize="18px"
                      lineheight="24px"
                      sizedes="14px"
                      heightdes="60px"
                      mb="0"
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </InnerLayout>
  );
};

export default ContentDetailPage;
