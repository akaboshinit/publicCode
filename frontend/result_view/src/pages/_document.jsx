import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';
import theme from '../theme';

export default class MyDocument extends Document {
    render() {
        return (
        <Html lang="ja">
            <Head>
            <meta name="theme-color" content={theme.palette.primary.main} />
            <meta charSet="utf-8" />
            <link rel="icon" type="image/ico" href="/favicon.ico" />
            {/* <script async src={`https://www.googletagmanager.com/gtag/js?id=UA-174249701-3`}/>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'UA-174249701-3', {
                    page_path: window.location.pathname,
                    });`,
                }}
            />
            <meta name="google-site-verification" content="qzICqnnq4xkDaDL0f9XEuqwfU_fZ5TosGOhIy7AvyjA" /> */}
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
        );
    }
    }

    MyDocument.getInitialProps = async (ctx) => {const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
        originalRenderPage({
        enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
        });

    const initialProps = await Document.getInitialProps(ctx);

    return {
        ...initialProps,
        styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
    };
};