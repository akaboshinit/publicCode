import { FC,useState,useEffect } from 'react'
import Link from 'next/link'

import { Menu } from '../components/index' 
import { ESTALE } from 'constants';

const Hetaji: FC = () => {

    const [ input,setInput ] = useState('');

    const test = (() => {
        const canvas = document.querySelector('canvas');
        const context = canvas.getContext('2d');
        const width = 500;
        const height = 500;

        const chara = new Image();
        chara.src = "/duck.jpg"
        context.drawImage(chara, 0, 0, width, height)

        context.font = "40px 'NikkyouSans"
        context.fillStyle = '#424242'
        context.textAlign = 'center'
        context.textBaseline = 'middle'
        context.fillText(`${input}`, 250, 250)
    })

    return(
        <div>
            <Menu />
            <div style={{width:'200px'}}>
                <svg 
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 100 100"
                >
                <circle style={{fill:'#ccc'}} cx="50" cy="50" r="50"/>
                </svg>
            </div>
            <div style={{fontFamily:'NikkyouSans'}}>aaaa</div>
            <div>
                <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}} />
                <input type="button" onClick={()=>{test()}} />
            </div>
            <canvas style={{border:'solid 2px blue',borderRadius:'10px',margin:'10px'}} onLoad={()=>{test()}}  id="board" width="500px" height="500px"/>
        </div>
    )
}

// http://font.gloomy.jp/honoka-maru-gothic-dl.html
// http://calligra-tei.oops.jp/ex-lemon.html
// https://graphics.tailtame.com/archives/tare-font/
// http://font.sumomo.ne.jp/font_2.html
// http://tanukifont.com/yojo-font/
// http://mksd.jp/holidaytate.html

export default Hetaji;