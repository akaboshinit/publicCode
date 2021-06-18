import React from 'react';
import Link from 'next/link';
import { H2 } from '../styled/index'
import styled from 'styled-components';
import { dir } from '../env'

const Error = (props : any) => {
    console.log('Render!!')
    return (
    <C>
        <Center>
            <div>404.<br />エラーが起きました<br />ページがありません</div>
            <Link href="/category/about" as={dir+'/category/about'}>
                <H2><br />TOPページに戻る、、</H2>
            </Link>
        </Center>
    </C>
    )
}

const C = styled.div`
    position: 'relative';
`

const Center = styled.div`
    position: 'absolute';
    top: '50%';
    left: '50%';
    transform: 'translate(-50%,-50%)';
    font-size: '1.5em';
    text-align: 'center';
`

export default Error;