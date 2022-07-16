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
  root: {
    "& .image": {
      position: "relative",
      width: "100%",
      paddingTop: "38%",
      lineHeight: 0,
      [theme.breakpoints.down("md")]: {
        paddingTop: "50%",
      },
      [theme.breakpoints.down("sm")]: {
        paddingTop: "60%",
      },
    },
    "& .iconContact": {
      height: 27,
      marginRight: 15,
      [theme.breakpoints.down("sm")]: {
        height: 20,
      },
    },
    "& .googleMap": {
      height: 500,
      [theme.breakpoints.down("sm")]: {
        height: 450,
      },
      "& iframe": {
        width: "100%",
        height: "100%",
      },
    },
    "& .xsReverse": {
      [theme.breakpoints.down("md")]: {
        flexDirection: "column-reverse",
      },
    },
    "& a": {
      fontWeight: 400,
    },
  },
}));

const navi = [{ title: "หน้าแรก", path: "/" }, { title: "ติดต่อเรา" }];

const ContactPage = () => {
  const classes = useStyles();
  return (
    <InnerLayout>
      <Container maxWidth="lg" className={classes.root}>
        <BreadcrumpDefault items={navi} />
        <Typography variant="h1" sx={{ mb: "30px" }}>
          ติดต่อเรา
        </Typography>
        <Box className="image" sx={{ mb: { xs: "30px", md: "50px" } }}>
          <img src={`${prefix}/images/contact.jpg`} alt="" className="ratio" />
        </Box>
        <Grid container spacing={4} className="xsReverse">
          <Grid item md={6} sm={12} xs={12}>
            <Box className="googleMap">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.3216459010237!2d102.80605531504906!3d17.39634510712513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31237633befda425%3A0x3aa8aa6ba479be1b!2z4Lir4LmJ4Liy4LiH4LmA4Lie4LiK4Lij4LiX4Lit4LiH4LiK4Lix4Lii4LmA4LiJ4Lil4Li04LihIOC4leC4o-C4suC4lOC4suC4pw!5e0!3m2!1sth!2sth!4v1653211881804!5m2!1sth!2sth"
                width="600"
                height="450"
                loading="lazy"
              ></iframe>
            </Box>
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <Box>
              <Typography variant="h4" sx={{ mb: "15px" }}>
                ห้างเพชรทองชัยเฉลิม ตราดาว
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: { xs: "15px", md: "20px" },
                }}
              >
                <LocationOnIcon
                  color="secondary"
                  sx={{ mr: "15px", fontSize: { xs: 25, sm: 30 } }}
                />
                <Typography variant="subtitle1" component="p">
                  131/5-6 ถ.นิตโย ต.หมากแข้ง อ.เมือง จ.อุดรธานี
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: { xs: "15px", md: "20px" },
                }}
              >
                <CallIcon
                  color="secondary"
                  sx={{ mr: "15px", fontSize: { xs: 25, sm: 30 } }}
                />
                <Typography variant="subtitle1" component="p">
                  <Link href="tel:042-245750">042-245750</Link>,{" "}
                  <Link href="tel:088-5605601">088-5605601</Link>
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: { xs: "15px", md: "20px" },
                }}
              >
                <AccessTimeFilledIcon
                  color="secondary"
                  sx={{ mr: "15px", fontSize: { xs: 25, sm: 30 } }}
                />
                <Typography variant="subtitle1" component="p">
                  จันทร์-เสาร์ 09:00-17:30
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: { xs: "15px", md: "20px" },
                }}
              >
                <img
                  src={`${prefix}/images/ic_facebook.svg`}
                  alt=""
                  className="iconContact"
                />
                <Typography variant="subtitle1" component="p">
                  <Link
                    target="_blank"
                    href="https://www.facebook.com/ChaichalermTraDao"
                  >
                    ห้างเพชรทองชัยเฉลิม ตราดาว
                  </Link>
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: { xs: "15px", md: "20px" },
                }}
              >
                <img
                  src={`${prefix}/images/ic_line.svg`}
                  alt=""
                  className="iconContact"
                />
                <Typography variant="subtitle1" component="p">
                  <Link
                    target="_blank"
                    href="https://liff.line.me/1645278921-kWRPP32q/?accountId=chaichalermgold"
                  >
                    @CHAICHALERMGOLD
                  </Link>
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: { xs: "15px", md: "20px" },
                }}
              >
                <img
                  src={`${prefix}/images/ic_ins.svg`}
                  alt=""
                  className="iconContact"
                />
                <Typography variant="subtitle1" component="p">
                  <Link
                    target="_blank"
                    href="https://instagram.com/chaichalermjewellery?igshid=YmMyMTA2M2Y="
                  >
                    @CHAICHALERMJEWELLERY
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </InnerLayout>
  );
};

export default ContactPage;
