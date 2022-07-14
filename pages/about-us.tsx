import { Box, Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Headline from "components/Headline";
import React from "react";
import prefix from "utils/path";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import Link from "components/Link";
import { InnerLayout } from "components/layouts/InnerLayout";
import BreadcrumpDefault from "components/BreadCrumpDefault";

const useStyles = makeStyles((theme: any) => ({
  root: {},
}));

const navi = [{ title: "หน้าแรก", path: "/" }, { title: "เกี่ยวกับเรา" }];

const AboutUsPage = () => {
  const classes = useStyles();
  return (
    <InnerLayout>
      <Container maxWidth="lg" className={classes.root}>
        <BreadcrumpDefault items={navi} />
        <Typography variant="h1" sx={{ mb: "30px" }}>
          เกี่ยวกับเรา
        </Typography>
      </Container>
    </InnerLayout>
  );
};

export default AboutUsPage;
