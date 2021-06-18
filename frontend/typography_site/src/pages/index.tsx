import { FC } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import { Menu } from '../components/index' 

import styles from '../styles/Home.module.scss'

const Home: FC = () => {

  return (
    <div>
      <Menu />
      
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1740 577">
        <g className={styles.wrap_all} data-name="SVG全体をグループ">
          <path data-name="ロゴパーツ 下" d="M299,223H251v36h48V391H155V259h36V223H155c-28.4,0-36,7.6-36,36V391c0,28.4,7.6,36,36,36H299c28.4,0,36-7.6,36-36V259C335,230.6,327.4,223,299,223Z"/>
          <path data-name="ロゴパーツ 上" d="M383.5,140.5h-144c-28.4,0-36,7.6-36,36v132c0,28.4,7.6,36,36,36h48v-36h-48v-132h144v132h-36v36h36c28.4,0,36-7.6,36-36v-132C419.5,148.1,411.9,140.5,383.5,140.5Z"/>
          <path data-name="ロゴテキスト D 01" d="M562.5,239.5c41.22,0,51,18,51,51,0,35.08-11.07,52-53,52h-26v63h26c37.21,0,55.37-1.85,79-25s38-53.38,38-90c0-38.27-10.36-66.67-38-89-23.27-18.66-35.89-25-77-25h-89v229h51v-166Z"/>
          <path data-name="ロゴテキスト E 01" d="M775.5,263.5c-17.72,0-17.44-26,0-26h38v-63h-51c-24.1,0-38.1-.36-51.39,12.39S686.5,214.35,686.5,237.5v90c0,24,10.55,51.69,24.61,64.39s37.81,11.61,64.39,11.61h38v-63h-38c-18,0-17.42-26,0-26h38v-51Z"/>
          <path data-name="ロゴテキスト Z 01" d="M824,175v63h77L824,404h192V341H939l77-166Z"/>
          <path data-name="ロゴテキスト D 02" d="M1114.5,237.5c41.22,0,51,18,51,51,0,35.08-9.07,52-51,52h-28v63h28c37.21,0,53.37-1.85,77-25s38-53.38,38-90c0-38.27-10.36-66.67-38-89-23.27-18.66-35.89-25-77-25h-89v229h51v-166Z"/>
          <path data-name="ロゴテキスト E 02" d="M1327.5,263.5c-17.72,0-17.44-26,0-26h38v-63h-51c-24.1,0-38.1-.36-51.39,12.39s-24.61,27.46-24.61,50.61v90c0,24,10.55,51.69,24.61,64.39s37.81,11.61,64.39,11.61h38v-63h-38c-18,0-17.42-26,0-26h38v-51Z"/>
          <path data-name="ロゴテキスト Z 03" d="M1377,174v63h77l-77,166h192V340h-77l77-166Z"/>
        </g>
      </svg>

      <div style={{width:'500px'}}>
        <svg 
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
        >
          <text
            x="50%" 
            y="50%"
            textAnchor="middle" 
            dominantBaseline="central"
            fontFamily="sans-serif" 
            fontSize="100"
          >
            雨
          </text>

          {/* <Rain x={trans}  y={20}/> */}
          <Rain x={5}  y={10}/>
          <Rain x={85} y={10}/>
          <Rain x={5}  y={50}/>
          <Rain x={85}  y={50}/>

          {/* <img
            src="/waterdrop.svg"
            width="100"
            height="100">
          </img> */}


          {/* <circle style={{fill:'#ccc'}} cx="50" cy="50" r="50"/> */}
        </svg>
      </div>

      <img
        className={styles.Rain}
        src="/waterdrop.svg"
        width="100"
        height="100">
      </img>

      <h1 className={styles.nintendo}>Annoying CRT retro flicker</h1>
      <p className={`${styles.nintendo} ${styles.p}`}>Come for the nostalgia, stay for the vertigo-inducing jiggle effect. Can be used in a more artistic / less queasy way without the animation. Works best on large blocky text.</p>

      <div style={{height:'500px'}}>
      </div>

    </div>
  )
} 

export default Home;

const Rain = ( { x, y } ) => {
  {/* <svg 
    xmlns="http://www.w3.org/2000/svg" 
    x="0px" 
    y="0px"
    width="100%"
    height="100%"
    viewBox="0 0 535 535"
  >
    <path 
      d="M425.792,376.045c0-33.003-10.93-102.79-56.351-168.371C330.223,151.05,266.259,0,266.259,0
      s-60.904,151.05-100.122,207.673c-45.421,65.581-56.351,135.368-56.351,168.372c0,87.086,69.778,157.863,156.473,159.495v0.038
      c0.511,0,1.02-0.015,1.53-0.019c0.511,0.005,1.02,0.019,1.531,0.019v-0.038C356.014,533.908,425.792,463.131,425.792,376.045z"
    />
  </svg> */}
  
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      x={x} 
      y={y}
      width="12%"
      height="12%"
      viewBox="0 0 535 535"
      fill='blue'
      className={styles.Rain}
    >
      <g className={styles.Rain_all} data-name="SVG全体をグループ">
        <path
          d="M425.792,376.045c0-33.003-10.93-102.79-56.351-168.371C330.223,151.05,266.259,0,266.259,0
          s-60.904,151.05-100.122,207.673c-45.421,65.581-56.351,135.368-56.351,168.372c0,87.086,69.778,157.863,156.473,159.495v0.038
          c0.511,0,1.02-0.015,1.53-0.019c0.511,0.005,1.02,0.019,1.531,0.019v-0.038C356.014,533.908,425.792,463.131,425.792,376.045z"
        />
      </g>
    </svg>
  )
}