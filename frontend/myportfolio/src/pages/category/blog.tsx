import * as React from 'react';
import Head from 'next/head';
import styled from 'styled-components'
import { Imgcard } from '../../components/index';

const Blog = () => {
  return(
    <>
      <Head>
        <title>akaboshi-portfolio</title>
      </Head>
      <Div>
          <Imgcard
            className="slide"
            size="S"
            img="black.jpg"
            title="準備中"
            content="まだ準備中です"
          />
      </Div>
    </>
  )
}

// About.getInitialProps = async ( ctx : any ) => {
//   // if( !ctx.req ){
//   //   const f = ['🌑', '🌒', '🌓', '🌔', '🌝', '🌖', '🌗', '🌘'];
//   //   function loop() {
//   //       location.hash = f[Math.floor((Date.now()/100)%f.length)];
//   //       // timeout = setTimeout(loop,500);
//   //       console.log(f)
//   //   }
//   //   loop()
//   // }
//   return { a:'a' }
// }

const Div = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export default Blog;