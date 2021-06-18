import React from 'react';

import Link from 'next/link';

import Card from '@material-ui/core/Card';

const Home = () => {
  return (
    <React.Fragment>
      <div style={{display:'grid',placeItems:'center',height:'100vh'}}>
        <Card style={{padding:'20px'}} variant="outlined">
          <h1 style={{margin:'10px'}}>もくじページ</h1>
          <Link href={'/'}>
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
          </Link>
        </Card>
      </div>
    </React.Fragment>
  )
}

export default Home