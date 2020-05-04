import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <html lang="ko">
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="description"
            content="디자이너 김찬기의 블로그, 포트폴리오"
          />
          <meta
            name="keywords"
            content="포트폴리오, 웹디자이너, 웹퍼블리셔, 프론트엔드, 리엑트, react, next.js, 워드프레스"
          />
          <meta name="author" content="chanki - heavybear" />
          <meta property="og:type" content="blog" />
          <meta property="og:title" content="heavybear-blog" />
          <meta
            property="og:description"
            content="디자이너 김찬기의 블로그, 포트폴리오"
          />
          <meta property="og:image" content="/static/img/cover.png" />
          <meta property="og:url" content="https://heavybear.net" />
          <meta
            name="google-site-verification"
            content="mg5O0ul2XSt7cBOtNc_KCy13gR9fHqM_yBJwFQ56iog"
          />
          <meta
            name="naver-site-verification"
            content="a29bc0e8f264386f1af1943853893217ecc6b7b5"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/static/favicon/site.webmanifest" />
          <script
            type="text/javascript"
            src="/static/lib/masonry.pkgd.min.js"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `<script async src="https://www.googletagmanager.com/gtag/js?id=UA-165367149-1"></script>
            <script>
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'UA-165367149-1');
            </script>`,
            }}
          />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
