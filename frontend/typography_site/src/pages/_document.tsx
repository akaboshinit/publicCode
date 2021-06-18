import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
        <Html lang="ja">
            <Head>
            <meta name="theme-color" />
            <meta charSet="utf-8" />
            <link rel="icon" type="image/ico" href="/favicon.ico" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
        );
    }
};