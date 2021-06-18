import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import '../styles/tailwind.css'

export default function MyApp(props) {
  const { Component, pageProps } = props;

  return (
    <React.Fragment>
      <Head>
        <title>portfolio</title>
        <link rel="icon" type="image/ico" href="/favicon.ico" />
        {/* <meta property="og:type" content="artcle" />
        <meta property="og:url" content={'https://typography-site.vercel.app/'} />
        <meta property="og:image" content={'https://result-view.vercel.app/api/ogp/フォントが変わるサイト'} />
        <meta property="og:site_name" content={'typography-site'} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@akaboshinit" />
        <meta name="twitter:url" content={'https://typography-site.vercel.app/'} />
        <meta name="twitter:title" content={'typography-site'} />
        <meta name="twitter:description" content={'typography-site'} />
        <meta name="twitter:image" content={'https://result-view.vercel.app/api/ogp/フォントが変わるサイト'} /> */}
        <link href="https://fonts.googleapis.com/css2?family=Kosugi+Maru&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@500;700;800;900&amp;display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};