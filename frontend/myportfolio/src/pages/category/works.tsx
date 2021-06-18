import React from 'react';
import styled from 'styled-components';
import { Imgcard } from '../../components/index';

const Works = () => {

return (
<>
    <Div>
        <Imgcard
            className="slide"
            size="S"
            img="double_s.png"
            title="大学通知LINEbot"
            content="大学のポータルサイトの.通知の利便性を改善すべく、.LINEと連携して随時通知を送る.プログラム"
        />
        <Imgcard
            className="slide"
            size="S"
            img="portfolio_screen.png"
            title="ポートフォリオ"
            content="このポートフォリオです。"
        />
        {/* <Imgcard
            className="slide"
            size="S"
            img="room.jpg"
            title="bb"
            content="aa"
        />
        <Imgcard
            className="slide"
            size="S"
            img="room.jpg"
            title="bb"
            content="aa"
        />
        <Imgcard
            className="slide"
            size="S"
            img="room.jpg"
            title="bb"
            content="aa"
        /> */}
    </Div>
</>
)
}

const Div = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export default Works;