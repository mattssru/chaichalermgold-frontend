import React from "react";
import NextApp from "next/app";
import Head from "next/head";
import "../styles/globals.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "theme";

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
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/images/favicon.ico" />
          <title>ห้างทองเพชรเฉลิมชัย ตราดาว</title>
        </Head>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  };
}
export default App;
