import "react-app-polyfill/ie11";
import Layout from "../layout/layout";
import "../css/reset.css";
import "../css/layout.scss";
import "../css/markup.scss";
import "../fontawsome";
import "../css/nprogress.css";
import NProgress from "nprogress";
import Router from "next/router";
import Head from "next/head";

Router.events.on("routeChangeStart", (url) => {
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>heavybear blog</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default App;
