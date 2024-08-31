import { Box, Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState, useEffect } from "react";
import { getPost } from "utils/api";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import ShareSocial from "@components/ShareSocial";
import router from "next/router";
import BreadcrumpDefault from "components/BreadCrumpDefault";
import { InnerLayout } from "components/layouts/InnerLayout";
import { get } from "lodash";

const useStyles = makeStyles((theme: any) => ({
  root: {
    "& h1": {
      marginBottom: 30,
    },
    "& .imageContent": {
      "& img": {
        display: "block",
        maxWidth: "100%",
        width: "100%",
        height: "auto",
      },
    },
    "& p": {
      fontSize: "1.25rem",
      lineHeight: 1.55,
    },
    "& div img": {
      display: "block",
      maxWidth: "100%",
      width: "100%",
      height: "auto",
      borderRadius: 12,
    },
    "& .nav-link": {
      textDecoration: "none",
    },
    "& .active:after": {
      content: " (current page)",
    },
    "& .tags": {
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
      gap: 10,
      color: "#7e7e7e",
      "& .tag": {
        border: "1px solid #a1a1a1",
        borderRadius: "3px",
        padding: "10px",
        color: "#7e7e7e",
      },
    },
    "& .imageContents": {
      display: "grid",
      gridTemplateColumns: "repeat(1, 1fr)",
      gap: 10,
      backgroundColor: "#e3e3e3",
      padding: 15,
      borderRadius: 10,
      [theme.breakpoints.up("sm")]: {
        gridTemplateColumns: "repeat(2, 1fr)",
      },
      [theme.breakpoints.up("md")]: {
        gridTemplateColumns: "repeat(3, 1fr)",
        padding: 25,
      },
    },
  },
}));

const ContentDetailPage = () => {
  const classes = useStyles();
  const [content, setContent] = useState<any>();

  useEffect(() => {
    const { slug } = router.query;
    const fetch = async () => {
      const data = await getPost(slug);
      setContent(data);
      return data;
    };
    fetch();
  }, [getPost]);
  // useEffect(() => {
  //   const fetch = async () => {
  //     const { slug } = router.query;
  //     const data: any = await fetchContent();
  //     setListContent(data.filter((content: any) => content.slug !== slug));
  //     return data;
  //   };
  //   fetch();
  // }, [fetchContent]);

  const navi = [
    { title: "หน้าแรก", path: "/" },
    { title: "บทความ", path: "/contents" },
    { title: content?.title },
  ];
  const url = typeof window !== "undefined" ? window.location.href : "";
  // const url =
  //   "https://www.chaichalermgold.com/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%A0%E0%B8%97/%e0%b8%81%e0%b8%b3%e0%b9%84%e0%b8%a5965";
  return (
    <InnerLayout>
      <Container maxWidth="lg" className={classes.root}>
        <BreadcrumpDefault items={navi} />
        <Typography variant="h1" sx={{ mb: "10px" }}>
          {content?.title}
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
                {content?.publish_date}
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
          <img src={content?.thumb} alt={content?.title} />
        </Box>
        <Typography
          dangerouslySetInnerHTML={{ __html: content?.detail }}
          sx={{
            color: "#7e7e7e",
            mb: "10px",
            marginBottom: "25px",
            borderBottom: "1px solid #e7e7e7",
            paddingBottom: "20px",
          }}
        ></Typography>
        {content?.tags.length > 0 && (
          <Box className="tags" sx={{ lineHeight: 0, mb: "30px" }}>
            Tags:{" "}
            {content?.tags.map((tag: any, index: number) => {
              return (
                <Box className="tag" key={index}>
                  {tag}
                </Box>
              );
            })}
          </Box>
        )}
      </Container>
    </InnerLayout>
  );
};

export default ContentDetailPage;
