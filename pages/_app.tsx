import React, { useEffect } from "react"
import NextApp from "next/app"
import Head from "next/head"
import "../styles/globals.css"
import { CssBaseline, ThemeProvider } from "@mui/material"
import theme from "theme"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "react-slideshow-image/dist/styles.css"
import { HomeLayout } from "components/layouts/HomeLayout"
import { SnackbarProvider } from "notistack"

class App extends NextApp {
  static getInitialProps = async ({ Component, ctx }: any) => {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return { pageProps }
  }
  componentDidMount() {
    const jssStyles = document.querySelector("#jss-server-side")
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }

  render = () => {
    const { Component, pageProps }: any = this.props

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
          <meta property="og:title" content="ห้างทองเพชรเฉลิมชัย ตราดาว" />
          <meta
            name="keywords"
            content="เพชร, ทอง, ห้องทอง, ห้างเพชร, งานแต่งงาน, แต่งงาน, แหวน, เครื่องประดับ"
          />
          <meta
            property="og:description"
            content="“ เพราะวันสำคัญของคุณ คือวันสำคัญที่สุดของเรา ”"
          />
          <meta property="og:url" content="https://www.chaichalermgold.com/" />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://chaichalermgold.com/images/about.jpeg"
          />
          <link rel="icon" href="/images/logo_black.svg" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Sriracha&family=IBM+Plex+Sans+Thai:wght@500&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://unpkg.com/aos@2.3.1/dist/aos.css"
            rel="stylesheet"
          ></link>
          <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
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
          <Component {...pageProps} />
        </SnackbarProvider>
      </ThemeProvider>
    )
  }
}
export default App
