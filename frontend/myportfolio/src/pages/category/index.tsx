import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Index = (props : any) => {
console.log('Render!!')
return (
    <>
    <div>
        category-HomePage
    </div>
    </>
)
}

// Index.getInitialProps = async ( req:any, res :any) => {
//     if (res) {
//         res.writeHead(302, { Location: '/category/about' });
//         res.end();
//     }
// }

export default Index;