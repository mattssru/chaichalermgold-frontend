import React from "react";
import NextApp from "next/app";
import Head from "next/head";
import "../styles/globals.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "theme";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HomeLayout } from "components/layouts/HomeLayout";
import { SnackbarProvider } from "notistack";

class App extends NextApp {
  static getInitialProps = async ({ Component, ctx }: any) => {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  };
  componentDidMount() {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render = () => {
    const { Component, pageProps }: any = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          <meta name="theme-color" content={theme.palette.primary.main} />
          <meta name="description" content="ห้างทองเพชรเฉลิมชัย ตราดาว" />
          <link rel="icon" href="/images/logo_gold.svg" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@500&display=swap"
            rel="stylesheet"
          />
          <title>ห้างทองเพชรเฉลิมชัย ตราดาว</title>
        </Head>
        <CssBaseline />
        <SnackbarProvider
          maxSnack={3}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <HomeLayout>
            <Component {...pageProps} />
          </HomeLayout>
        </SnackbarProvider>
      </ThemeProvider>
    );
  };
}
export default App;
