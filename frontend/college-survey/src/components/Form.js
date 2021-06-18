import React, { useState } from 'react';
import { makeStyles, Typography,Card,Radio,RadioGroup,FormControlLabel,Checkbox } from '@material-ui/core';

const useStyles = makeStyles({
    card: {
        width: '100%',
        padding: '20px 10%',
        margin: '30px 0'
    },
    title: {
        fontSize: '1.7em',
        padding: '15px 0'
    },
    part: {
        fontSize: '1.5em'
    }
});

const Form = (props) => {
    const classes = useStyles();
    const [ value, setValue ] = useState('');
    const [ state, setState ] = useState({
        checkA: false,
        checkB: false,
        checkC: false,
        checkD: false,
        checkE: false
    })
    const ischeckbox = props.title.indexOf('複数選択可')
    if( ischeckbox < 0 ){
        return (
            <>
                <Card variant="outlined" className={classes.card}  >
                    <Typography className={classes.title} variant="h4">{props.title}</Typography>
                    <RadioGroup aria-label={props.title} name={props.name} value={value} onClick={()=>{ga('send', 'event', 'radio','click', 'open',1 );}} onChange={(event)=>{setValue(event.target.value)}} required={true} >
                        <FormControlLabel data-value={props._1} value={props._1} control={<Radio required={true} />} label={props._1}/>
                        <FormControlLabel data-value={props._2} value={props._2} control={<Radio required={true} />} label={props._2}/>
                        <FormControlLabel data-value={props._3} value={props._3} control={<Radio required={true} />} label={props._3}/>
                        <FormControlLabel data-value={props._4} value={props._4} control={<Radio required={true} />} label={props._4}/>
                        <Form5 _5={props._5} />
                    </RadioGroup>
                </Card>
            </>
        )
    } else {
        return (
            <>
                <Card variant="outlined" className={classes.card}  >
                    <Typography className={classes.title} variant="h4">{props.title}</Typography>
                    <RadioGroup aria-label={props.title} name={props.name} value={value} onClick={()=>{ga('send', 'event', 'radio','click', 'open',1 );}} onChange={(event)=>{setValue(event.target.value)}} required={true} >
                        <FormControlLabel data-value={props._1} value={props._1} control={<Checkbox checked={state.checkA} onChange={(event)=>{setState({...state,checkA:event.target.checked})}} name={props.name} />} label={props._1}/>
                        <FormControlLabel data-value={props._2} value={props._2} control={<Checkbox checked={state.checkB} onChange={(event)=>{setState({...state,checkB:event.target.checked})}} name={props.name} />} label={props._2}/>
                        <FormControlLabel data-value={props._3} value={props._3} control={<Checkbox checked={state.checkC} onChange={(event)=>{setState({...state,checkC:event.target.checked})}} name={props.name} />} label={props._3}/>
                        <FormControlLabel data-value={props._4} value={props._4} control={<Checkbox checked={state.checkD} onChange={(event)=>{setState({...state,checkD:event.target.checked})}} name={props.name} />} label={props._4}/>
                        <FormControlLabel data-value={props._5} value={props._5} control={<Checkbox checked={state.checkE} onChange={(event)=>{setState({...state,checkE:event.target.checked})}} name={props.name} />} label={props._5}/>
                    </RadioGroup>
                </Card>
            </>
        )
    }
    
}
export default Form

const Form5 = (props) => {
    if( props._5 != "" ) {
        return (
            <FormControlLabel data-value={props._5} value={props._5} control={<Radio required={true} />} label={props._5}/>
        )
    }
    return <></>
}