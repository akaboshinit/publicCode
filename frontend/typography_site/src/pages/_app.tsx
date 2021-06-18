import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import '../styles/globals.scss'

export default function MyApp(props) {
  const { Component, pageProps } = props;

  return (
    <React.Fragment>
      <Head>
        <title>typography-site</title>
        <link rel="icon" type="image/ico" href="/favicon.ico" />
        <link rel="icon" type="image/ico" href="/favicon.ico" />
        <meta property="og:type" content="artcle" />
        <meta property="og:url" content={'https://typography-site.vercel.app/'} />
        <meta property="og:image" content={'https://result-view.vercel.app/api/ogp/フォントが変わるサイト'} />{/* https://result-view.vercel.app/api/ogp/大正wifiツール */}
        <meta property="og:site_name" content={'typography-site'} />
        <meta name="twitter:card" content="summary_large_image" />{/* summary */}
        <meta name="twitter:site" content="@akaboshinit" />
        <meta name="twitter:url" content={'https://typography-site.vercel.app/'} />
        <meta name="twitter:title" content={'typography-site'} />
        <meta name="twitter:description" content={'typography-site'} />
        <meta name="twitter:image" content={'https://result-view.vercel.app/api/ogp/フォントが変わるサイト'} />
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};