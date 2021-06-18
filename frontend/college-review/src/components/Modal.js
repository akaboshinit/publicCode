import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Star from '@material-ui/icons/Star';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        width: '80%',
    },
    small_title: {
        height: '30px',
        fontSize: '1.5em',
        fontWeight: 'bold',
        margin: '20px 0',
        "@media (max-width: 700px)": {
            height: '50px',
            fontSize: '1.1em',
        }
    },
    small_content: {
        fontSize: '1.3em',
        "@media (max-width: 700px)": {
            fontSize: '1em',
        }
    }
}));

const TransitionsModal = (props) =>  {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    if ( props.click ) {
        props.setClick('')
        setTimeout(()=>{setOpen(true)},500)
    }

    const array = props.array

    const box = [[],[],[],[],[]];
    const score = Number(array.スコア);

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={()=>{setOpen(false)}}
                onClick={()=>{setOpen(false)}}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 1500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                            <Typography id="transition-modal-title" className={classes.small_title} variant="h5" fontSize={10}>
                                {array.授業名}
                            </Typography>
                        <div id="transition-modal-description">
                            <div style={{marginBottom:'15px'}}>
                                {box.map(( array,index )=>{
                                    if( index >= score ) { return <Star key={index} style={{color:'#BBBBBB'}} /> }
                                    return <Star key={index} style={{color:'#ffff00'}} />
                                })}
                                
                            </div>
                            <div className={classes.small_content}>{array.スコア}</div>
                            <Typography className={classes.small_content} variant="h6">
                                <div>評価方法:{array.評価方法}</div>
                                <div>出欠の頻度:{array.出欠の頻度}</div>
                                <div>予復習の手間:{array.予復習の手間}</div>
                                <div><br/></div>

                                <div>講義での説明:{array.講義での説明}</div>
                                <div>先生の講義への熱意:{array.先生の講義への熱意}</div>
                                <div><br/></div>

                                <div>単位の期待度:{array.単位の期待度}</div>
                                <div>試験等難易度:{array.試験等難易度}</div>
                                <div>講義の推奨度:{array.講義の推奨度}</div>
                                <div><br/></div>

                                <div>スコア:{array.スコア}</div>
                                <div><br/></div>

                                <div>コメント:{array.コメント}</div>
                                <div>{props.time}</div>
                            </Typography>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
export default TransitionsModal