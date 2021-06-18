import { FC,useEffect,useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import { Menu } from '../components/index' 

import styles from '../styles/font.module.scss'

const Font: FC = () => {

    const [ font_classbox, setFont_classbox ] = useState([]);
    useEffect(()=>{
        const obj = Object.entries(styles) //連想配列を配列に
        const font_class = obj.map((array)=>{
            if ( array[0].indexOf('font_') == 0 ) { //配列の要素にfont_が含まれてたら
                return array[1]
            }
        })
        setFont_classbox(font_class)
    },[])

    const [ trans, setTrans ] = useState(0);
    useEffect(()=>{
        const intervalId = setInterval(() => {
            setTrans(trans+1);

            setClassname([
                font_classbox[Math.floor( Math.random()*25 + 1 )],
                font_classbox[Math.floor( Math.random()*25 + 1 )],
                font_classbox[Math.floor( Math.random()*25 + 1 )],
                font_classbox[Math.floor( Math.random()*25 + 1 )],
                font_classbox[Math.floor( Math.random()*25 + 1 )],
                font_classbox[Math.floor( Math.random()*25 + 1 )],
                font_classbox[Math.floor( Math.random()*25 + 1 )],
                font_classbox[Math.floor( Math.random()*25 + 1 )],
                font_classbox[Math.floor( Math.random()*25 + 1 )],
            ])
        }, 250);
        return () => clearInterval(intervalId);
    },[trans])

    const [ classname, setClassname ] = useState([]);

    return (
        <div>
            {/* <Menu /> */}
            <div>
                <div className={styles.gridcenter} style={{height:'100vh'}}>
                    <Box_font
                        text="フォント"
                        classname={classname[0]}
                    />
                    <Box_font
                        text="ふぉんと"
                        classname={classname[1]}
                    />
                    <Box_font
                        text="書体"
                        classname={classname[2]}
                    />

                    <Box_font
                        text="変わる"
                        classname={classname[3]}
                    />
                    <Box_font
                        text="代わる"
                        classname={classname[4]}
                    />
                    <Box_font
                        text="換わる"
                        classname={classname[5]}
                    />

                    <Box_font
                        text="サイト"
                        classname={classname[6]}
                    />
                    <Box_font
                        text="サザエ"
                        classname={classname[7]}
                    />
                    <Box_font
                        text="ササミ"
                        classname={classname[8]}
                    />
                </div>

                <div style={{height:'10vh'}}></div>

                <div className={styles.gridcenter} style={{height:'100vh'}}>
                    <div>
                        <Span_font
                            text="変わる"
                            classname_0={classname[9]}
                            classname_1={classname[2]}
                            classname_2={classname[4]}
                        />
                        <Span_font
                            text="デザ"
                            classname_0={classname[7]}
                            classname_1={classname[6]}
                            classname_2={classname[3]}
                        />
                        <Span_font
                            text="イン"
                            classname_0={classname[1]}
                            classname_1={classname[5]}
                            classname_2={classname[8]}
                        />
                    </div>
                </div>

                <div className={styles.gridcenter} style={{height:'100vh'}}>
                    <div>
                        <Box_font
                            text="みらい"
                            classname={classname[8]}
                        />
                        <Box_font
                            text="を"
                            classname={classname[1]}
                        />
                        <Box_font
                            text="カエル"
                            classname={classname[2]}
                        />
                    </div>
                </div>

                <div className={styles.gridcenter} style={{height:'100vh'}}>
                    <div>
                        <Span_font
                            text="視点"
                            classname_0={classname[1]}
                            classname_1={classname[5]}
                            classname_2={classname[6]}
                        />
                        <Span_font
                            text="を"
                            classname_0={classname[8]}
                            classname_1={classname[7]}
                            classname_2={classname[9]}
                        />
                        <Span_font
                            text="かえる"
                            classname_0={classname[4]}
                            classname_1={classname[3]}
                            classname_2={classname[2]}
                        />
                    </div>
                </div>

            </div>
        </div>
    )
} 

export default Font;

const Box_font = ( {text,classname} ) => {
    const xtext = text.split('');
    return (
        <div>
            <p className={classname} style={{height:'4.5rem',margin:'0',fontSize:'3rem',textAlign:'center'}}>
                {text}
            </p>
        </div>
    )
}

const Span_font = ( {text,classname_0,classname_1,classname_2} ) => {
    const xtext = text.split('');
    return (
        <div>
            <p style={{margin:'0',fontSize:'3rem',textAlign:'center'}}>
                {/* {xtext.map((array,index)=>{
                    return(
                        <span key={index} className={classname_1}>
                            {array}
                        </span>
                    )
                })} */}
                <span className={classname_0}>
                    {xtext[0]}
                </span>
                <span className={classname_1}>
                    {xtext[1]}
                </span>
                <span className={classname_2}>
                    {xtext[2]}
                </span>
            </p>
        </div>
    )
}