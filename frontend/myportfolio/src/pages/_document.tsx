import Document, { Html, Head, Main, NextScript } from 'next/document'
import {ServerStyleSheet} from 'styled-components';
import { dir } from '../env'
import { GA_TRACKING_ID } from '../gtag'

export default class MyDocument extends Document {
    static async getInitialProps(ctx:any) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage
        try {
            ctx.renderPage = () =>
                originalRenderPage({
                enhanceApp: (App:any) => (props:any) =>
                    sheet.collectStyles(<App {...props} />),
                })
            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: (
                <>
                    {initialProps.styles}
                    {sheet.getStyleElement()}
                </>
                ),
            }
        } finally {
            sheet.seal()
        }
    }

    render() {
        return (
        <Html lang="ja">
                <Head>
                    <meta charSet="utf-8" />
                    <link rel="icon" type="image/jpg" href={dir+'/icon.jpg'}/>
                    <meta name="google-site-verification" content="XoOrJUFaeFmuY6WXOhRp40t9FrM-FWHu73TX7fLW7Eg" />
                    <link rel="stylesheet" href="https://meyerweb.com/eric/tools/css/reset/reset200802.css"/>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/earlyaccess/notosansjapanese.css"/>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Condensed:700"/>
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css"/>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.6.2/animate.min.css"/>
                    <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}/>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', '${GA_TRACKING_ID}', {
                            page_path: window.location.pathname,
                            });`,
                        }}
                    />
                </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
        );
    }
}