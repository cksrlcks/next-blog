import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';


export default class MyDocument extends Document {
    static getInitialProps({ renderPage }) {
        const sheet = new ServerStyleSheet();
        const page = renderPage((App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        );
        const styleTags = sheet.getStyleElement();
        return { ...page, styleTags };
    }

    render() {
        return (
            <html lang="ko">
                <Head>
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
                    <meta name="google-site-verification" content="N3HIIShejhE7s8soNIMfLpOQ0YBs4qrm29U9P_WFYv4" />
                    <script type="text/javascript" src="/static/lib/masonry.pkgd.min.js"></script>
                    {this.props.styleTags}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}