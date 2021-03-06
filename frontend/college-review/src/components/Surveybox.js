import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Reportform } from './index'

import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Star from '@material-ui/icons/Star';
import ReportProblemOutlinedIcon from '@material-ui/icons/ReportProblemOutlined';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    small_card: (props)=>({
        width: props.click ? '100%' : '300px',
        height: props.click ? '' : '300px',
        padding: '30px 18px',
        margin: '15px 10px',
        position:'relative',
        "@media (max-width: 700px)": {
            width: '300px',
            margin: '15px 0',
            // margin: '2%',
        }
    }),
    small_title: (props)=>({
        height: props.click ? '' : '55px',
        fontSize: '1.2em',
        fontWeight: 'bold',
        marginBottom: '20px'
    }),
    small_content: (props)=>({
        height: props.click ? '' : '70px',
        fontSize: '1.1em',
        overflow: 'hidden',
        texOverflow: 'ellipsis'
    }),
    click_display: (props)=>({
        display: props.click ? 'block' : 'none'
    }),
    table: {
        width:'450px',
        margin: '0 auto',
        "@media (max-width: 700px)": {
            width: '100%',
        },
    },
    tsmall_content: {
        fontSize: '1em'
    }
})

const Surveybox = (props) =>  {
    const classes = useStyles(props);
    const [ report, setReport ] = useState(false)
    const [ heart, setHeart ] = useState(Number(props.array.heart))

    const timestamp = props.array.?????????????????????v2.split(':')
    const time_set = timestamp[0] + '/' + timestamp[1] + '/' + timestamp[2] + '-' + timestamp[3] + '???';
    const score = Number(props.array.?????????)
    const box = [[],[],[],[],[]];
    const split_hyouka = props.array.????????????.split(',');
    const enter = props.array.????????????.split(/\r?\n/g);

    const heartclick = () => {
        setHeart(heart+1)
        const local = JSON.parse(localStorage.getItem("Heart"))
        let box = local;
        if ( local == null ) {
            box = [props.array]
        } else {
            box.push(props.array)
        }
        localStorage.setItem("Heart",JSON.stringify(box));

        store.read("????????????????????? 1", { search: { ?????????????????????v2: props.array.?????????????????????v2 , ?????????: props.array.????????? } }).then(data => {
            let totalheart = Number(data[0].heart);
            if( data[0].heart == undefined ) {totalheart = 0}
            store
                .edit("????????????????????? 1", {
                    search: { ?????????????????????v2: props.array.?????????????????????v2 , ?????????: props.array.????????? },
                    set: { heart: totalheart + 1 }
                })
                .then(res => {
                    console.log(res);
                });
        });
    }

    return (
        <>
            {/* <TransitionsModal array={props.array} time={props.time_set} click={props.isclick} setClick={props.setClick} /> */}
            <Card variant="outlined" className={classes.small_card} onClick={()=>{props.setClick(props.index);}} >
                <Typography className={classes.small_title} variant="h5" fontSize={10}>
                    {props.array.?????????}
                </Typography>
                <div style={{marginBottom:'15px'}}>
                    {box.map(( array,index )=>{
                        if( index >= score ) { return <Star key={index} style={{color:'#BBBBBB'}} /> }
                        return <Star key={index} style={{color:'#FFD700'}} />
                    })}
                    ?????????:{props.array.?????????}
                </div>

                <Typography className={`${classes.small_content} ${classes.click_display}`} variant="h5">
                <TableContainer component={Paper} className={classes.table}>
                    <Table  aria-label="simple table">
                        <TableBody>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    ????????????
                                </TableCell>
                                <TableCell align="right">
                                    {split_hyouka.map((array,index)=>{
                                        return (
                                        <Typography key={index} className={classes.tsmall_content} variant="h5" fontSize={10}>
                                            {array}
                                        </Typography>
                                        )
                                    })}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    ???????????????
                                </TableCell>
                                <TableCell align="right">
                                    <Typography className={classes.tsmall_content} variant="h5" fontSize={10}>
                                        {props.array.???????????????}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    ??????????????????
                                </TableCell>
                                <TableCell align="right">
                                    <Typography className={classes.tsmall_content} variant="h5" fontSize={10}>
                                        {props.array.??????????????????}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    ??????????????????
                                </TableCell>
                                <TableCell align="right">
                                    <Typography className={classes.tsmall_content} variant="h5" fontSize={10}>
                                        {props.array.??????????????????}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    ???????????????????????????
                                </TableCell>
                                <TableCell align="right">
                                    <Typography className={classes.tsmall_content} variant="h5" fontSize={10}>
                                        {props.array.???????????????????????????}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    ??????????????????
                                </TableCell>
                                <TableCell align="right">
                                    <Typography className={classes.tsmall_content} variant="h5" fontSize={10}>
                                        {props.array.??????????????????}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    ??????????????????
                                </TableCell>
                                <TableCell align="right">
                                    <Typography className={classes.tsmall_content} variant="h5" fontSize={10}>
                                        {props.array.??????????????????}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    ??????????????????
                                </TableCell>
                                <TableCell align="right">
                                    <Typography className={classes.tsmall_content} variant="h5" fontSize={10}>
                                        {props.array.??????????????????}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                </Typography>

                <Typography className={classes.small_content} style={{margin:'20px 0'}} variant="h6">
                    <div className={classes.click_display}>????????????:</div>
                    {enter.map((array,index)=>{
                        return (
                        <Typography key={index} className={classes.tsmall_content} style={{margin:'0 10px 10px 10px'}} variant="h5" fontSize={10}>
                            {array}
                        </Typography>
                        )
                    })}
                </Typography>

                <Typography style={{display:'flex',fontSize:'1.1em',position:'absolute',right:'10%',bottom:'10px'}} variant="h6">
                    <div>{time_set}</div>
                    <Isfavorite 
                        array={props.array}
                        heartclick={heartclick}
                    />
                    <div>{heart}</div>
                    <ReportProblemOutlinedIcon
                        style={{margin:'0 10px'}}
                        onClick={()=>{ setReport(!report)}}
                    />
                </Typography>
                <Box
                    report={report}
                    click={props.click}
                    array={props.array}
                />
            </Card>
        </>
    );
}
export default Surveybox

const Box = (props) => {
    const timestampbox = () => {
        const time = new Date();
        const year  = time.getFullYear();
        const month = time.getMonth() + 1;
        const day   = time.getDate();
        const hour  = ( time.getHours()   < 10 ) ? '0' + time.getHours()   : time.getHours();
        const min   = ( time.getMinutes() < 10 ) ? '0' + time.getMinutes() : time.getMinutes();
        const timestamp = year + ':' + month + ':' + day + ':' + hour + ':' + min;
        return timestamp
    }

    if ( props.report && props.click ) {
        return (
            <Reportform
                array={props.array}
                timestamp={timestampbox()}
            />
        )
    }
    return <></>
}

const Isfavorite = (props) => {
    const local = JSON.parse(localStorage.getItem("Heart"))
    let ispush = false;
    if ( local != null ) {
        local.map((array)=>{
            if ( props.array.?????????????????????v2 == array.?????????????????????v2 && props.array.????????? == array.????????? ) {
                ispush = true
            }
        })
    }

    if( ispush ){
        return (
        <FavoriteIcon
            style={{margin:'0 0 0 10px',color:'red'}}
        />
        )
    }
    return (
        <FavoriteBorderIcon 
            style={{margin:'0 0 0 10px'}}
            onClick={()=>{props.heartclick()}}
        />
    )
}