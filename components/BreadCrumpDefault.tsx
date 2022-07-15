import { Box, Breadcrumbs, Typography, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import prefix from "utils/path";
import Link from "./Link";
// import prefix from "utils/path";

const useStyles = makeStyles((theme: any) => ({
  root: {
    borderBottom: "1px solid #eee",
    margin: "30px 0",
    [theme.breakpoints.down("sm")]: {
      margin: "20px 0 30px 0",
    },
    "& .breadcrumbs": {
      "& .MuiBreadcrumbs-ol": {
        display: "flex",
        marginBottom: 30,
        alignItems: "center",
        [theme.breakpoints.down("sm")]: {
          marginBottom: 20,
        },
        "& li": {
          display: "block",
          [theme.breakpoints.down("sm")]: {
            marginBottom: 5,
          },
        },
      },
      position: "relative",
      "& a, & li": {
        display: "block",
        alignItems: "center",
        height: "100%",
        fontWeight: 400,
        "& a:hover": {
          opacity: 0.7,
        },
        "& p": {
          opacity: 0.7,
        },
        "& img": {
          position: "relative",
        },
      },
    },
  },
}));

const BreadcrumpDefault = (props: any) => {
  const classes = useStyles();
  const { items } = props;

  const listBreadcrumb = (items: any[]) => {
    return items.map((item: any, index: number) => {
      if (index === items.length - 1) {
        return <Typography component="p">{item.title}</Typography>;
      } else if (index === 0) {
        return (
          <Link key={index} href={item.path}>
            <img
              src={`${prefix}/images/ic_breadcrump.svg`}
              alt=""
              className="iconNavi"
            />
            {item.title}
          </Link>
        );
      } else {
        return (
          <Link key={index} href={item.path}>
            {item.title}
          </Link>
        );
      }
    });
  };
  return (
    <Box className={classes.root}>
      <Breadcrumbs
        className="breadcrumbs"
        separator="›"
        aria-label="breadcrumb"
      >
        {listBreadcrumb(items)}
      </Breadcrumbs>
    </Box>
  );
};

export default BreadcrumpDefault;
