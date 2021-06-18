import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../theme';
import '../styles/globals.css'

import Link from 'next/link';

import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';

export default function MyApp(props) {
  const { Component, pageProps } = props;

  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>taisho_wifiツール</title>
        <link rel="icon" type="image/ico" href="/favicon.ico" />
        <meta property="og:type" content="artcle" />
        <meta property="og:url" content={'https://result-view.vercel.app/'} />
        <meta property="og:image" content={'https://result-view.vercel.app/api/ogp/大正wifiツール'} />{/* https://result-view.vercel.app/api/ogp/大正wifiツール */}
        <meta property="og:site_name" content={'大正wifiツール'} />
        <meta name="twitter:card" content="summary_large_image" />{/* summary */}
        <meta name="twitter:site" content="@akaboshinit" />
        <meta name="twitter:url" content={'https://result-view.vercel.app/'} />
        <meta name="twitter:title" content={'大正wifiツール'} />
        <meta name="twitter:description" content={'大正大学wifiをワンタップ接続にするツール'} />
        <meta name="twitter:image" content={'https://result-view.vercel.app/api/ogp/大正wifiツール'} />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div style={{backgroundColor:'#D7E6EF'}}>
          <Button onClick={()=>setOpen(true)} style={{position:'fixed',top:'10px',right:'10px',border:'#1b1b1b solid 1px',backgroundColor:'#e3ebbc'}}>
            もくじ
          </Button>
          <Drawer anchor='right' style={{width:'300px',fontSize:'1.2rem'}} open={open} onClose={()=>setOpen(false)}>
            <div>
              <div style={{margin:'10px 5px',borderBottom:'#D7E6EF solid 3px'}}>
                <Link href={'/'}>
                  <a>もくじ</a>
                </Link>
              </div>
              <div style={{margin:'10px 5px',borderBottom:'#D7E6EF solid 3px'}}>
                <Link href={'/wifi_info'}>
                  <a>使い方ページ</a>
                </Link>
              </div>
              <div style={{margin:'10px 5px',borderBottom:'#D7E6EF solid 3px'}}>
                <Link href={'/wifi_success'}>
                  <a>接続成功ページ</a>
                </Link>
              </div>
              <div style={{margin:'10px 5px',borderBottom:'#D7E6EF solid 3px'}}>
                <Link href={'/tool_install'}>
                  <a>インストールページ</a>
                </Link>
              </div>
            </div>
            {/* <Link href={'/'}>
              <a>もくじ</a>
            </Link>
            <div></div>
            <Link href={'/wifi_info'}>
              <a>使い方ページ</a>
            </Link>
            <div></div>
            <Link href={'/wifi_success'}>
              <a>接続成功ページ</a>
            </Link>
            <div></div>
            <Link href={'/tool_install'}>
              <a>インストールページ</a>
            </Link> */}
          </Drawer>
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};