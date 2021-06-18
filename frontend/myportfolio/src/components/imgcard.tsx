import React from 'react';
import { Img_s,Img_m,Card_frame,Title,Contents } from '../styled/index'
import { dir,s_size,m_size_w,m_size_h } from '../env'

interface Img_card {
    className: string,
    size: string,
    img: string,
    title: string,
    content: string
}

const Imgcard:React.FC<Img_card> = (props:any) => {
    let line = props.content.split('.')
    switch( props.size ){
        case 'S':
            return(
            <>
                <Card_frame className={props.className} css="width: 250px;">
                    <Img_s width="100%" height={s_size} src={dir+'/images/'+props.img} alt="image" />
                    <Title>{props.title}</Title>
                    {line.map((array:string ,index:number)=>{
                        return <Contents key={index.toString()}>{array}</Contents>
                    })}
                </Card_frame>
            </>
            )
        case 'M':
            return(
            <>
                <Card_frame className={props.className} css="width: 450px;height: 275px;">
                    <Img_m width="100%" height={m_size_h} src={dir+'/images/'+props.img} alt="image" />
                </Card_frame>
            </>
            )
        case 'L':
            return(
            <>
                <div>aa</div>
            </>
            )
        default :
            return (
                <>
                    <div>Errorが起きました</div>
                </>
            )
    }
}

export default Imgcard