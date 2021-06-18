import React from 'react';
import styled from 'styled-components'
import { Imgcard } from '../../components/index';
import { A } from '../../styled/index'

const Profile = (props : any) => {

return (
<>
    
    <Big>Kosei Akaboshi</Big>
    <Normal>赤星 光誓</Normal>
    <P css="display: inline;margin-left: 10px;">東京在住 大学1年生 </P>
    {/* <Div>
        <Imgcard css="margin-bottom: 20px"
            className="slide"
            size="M"
            img="room.jpg"
            title=""
            content=""
        />
    </Div> */}
    <H3 css="width:150px">エンジニアとして</H3>
    <P>
        　高校3年生からプログラムの勉強を始め、歴は短いですが貪欲に勉強し様々な技術を修得しています。
        自分が、あったらいいな、便利だなと思うものを企画、プログラミング、デザインなど全て一人で行いサービスを作っています。
        最近は、主にHPやweb上で動くアプリなどを作っています。
        これからは、様々なプラットフォームで活動ができるように、スマホのアプリやAIに関する技術も学んでいくつもりです。
        若く、経験も浅いですが、効率よく必死に学ぶ事には自信があるので、まったく知らない領域でも深く深く貪欲に学んでいきます。
        <br/>まだ技術、経験は未熟ではありますが、学ぶ意欲は誰にも負けません。<br/>
        すこしでも興味がありましたら、ご連絡お願いします。
    </P>
    <H3>経歴</H3>
    <Table>
        <P css="grid-column: 1/2;grid-row: 1/2;"><strong>2001年</strong></P>
        <P css="grid-column: 2/3;grid-row: 1/2;">長野県で誕生</P>

        <P css="grid-column: 1/2;grid-row: 2/3;"><strong>2020年</strong></P>
        <P css="grid-column: 2/3;grid-row: 2/3;">大正大学入学.在学中</P>

        <P css="grid-column: 1/2;grid-row: 3/4;"></P>
        <P css="grid-column: 2/3;grid-row: 3/4;">東京在住</P>

        {/* <P css="grid-column: 1/2;grid-row: 4/5;"></P>
        <P css="grid-column: 2/3;grid-row: 4/5;"></P> */}
    </Table>
    <H3>好きなこと</H3>
    <P>プログラミング.映画.音楽(主に邦ロック).写真</P>
    <H3>連絡先</H3>
    <P><A css="border-bottom: black 1px solid;" href="https://twitter.com/akaboshinit">Twitter: @akaboshinit</A></P>
    <P><A css="border-bottom: black 1px solid" href="mailto:akaboshinit+site@gmail.com">mail: akaboshinit+site@gmail.com</A></P>
    <P>その他DMなどでも</P>
    <Div><Articl_title>エンジニア向け</Articl_title></Div>
    <H3 css="width:150px">エンジニアとして</H3>
    <P>
        現在は、フロントエンドからバックエンドまで広く勉強中です。<br />
        今までに扱った事のある技術は、<br/>
        フロントエンドでは「react」「next.js」<br/>
        バックエンドでは「node.js」「golang」<br/>
        サービスでは「firebase」などを使うことが多いです。<br/>
        ちなみにこのページはnextをgithub-pagesでdeployしています。<br/>
        前述してあり、繰り返しになってしまいますが、<br/>
        まだ技術、経験は未熟ではありますが、学ぶ意欲は誰にも負けません。<br/>
        すこしでも興味がありましたら、ご連絡お願いします。
    </P>
</>
)
}

const Div = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const Big = styled.div`
    font-size: 50px;
`

const Normal = styled.div`
    font-size: 30px;
    display: inline;
`

const H3 = styled.h4`
    line-height: 22px;
    font-size: 1.1em;
    margin: 10px 0;
    width: 120px;
    position: relative;
    padding: 0.25em 1em;
    border-top: solid 2px #555555;
    border-bottom: solid 2px #555555;
    &:before, &:after{
        content: '';
        position: absolute;
        top: -7px;
        width: 2px;
        height: -webkit-calc(100% + 14px);
        height: calc(100% + 14px);
        background-color: #555555;
    }
    &:before {
        left: 7px;
    }
    &:after {
        right: 7px;
    }
`

const Articl_title = styled.h3`
    font-size: 25px;
    margin: 20px 0;
    position: relative;
    display: inline-block;
    padding: 0 70px;
    &:before, &:after {
        content: '';
        position: absolute;
        top: 50%;
        display: inline-block;
        width: 60px;
        height: 1px;
        background-color: black;
    }
    &:before {
        left:0;
    }
    &:after {
        right: 0;
    }
`

const P = styled.p`
    line-height: 22px;
`

const Table = styled.div`
    display: grid;
    grid-auto-columns: 90px 1fr;
    grid-auto-rows: 30px 30px 30px 30px;
`

export default Profile;