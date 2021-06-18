import React, {useEffect,useState} from 'react';

import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import styles from '../styles/tool_install.module.scss';

const Tool_install = () => {

    const [user,setUser] = useState('')
    const [password,setPassword] = useState('')
    const [done,setDone] = useState(false)

    // papera
    // G7mB3g84

    if( done == true ){
        return(
            <React.Fragment>
                <div style={{display:'grid',placeItems:'center',width:'100%'}}>
                    <div className={styles.responsive} style={{display:'grid',placeItems:'center',height:'100vh',backgroundColor:'#D7E6EF'}}>
                        <Card className={styles.responsive_card}  style={{display:'grid',placeItems:'center',padding:'20px 30px',margin:'15px'}} variant="outlined">
                            <div style={{width:'100%',display:'grid',placeItems:'center'}}>
                                <a target="_brank" href="https://www.icloud.com/shortcuts/6f838ff6c43f42b9aedd12dcce463e1a"><span>iPhone</span>ショートカット</a>
                                <div style={{height:'10px'}}></div>
                                <a href="/university_wifi.zip" download="university_wifi.zip"><span>windows</span>用ファイル</a>
                            </div>
                            {/* <Button 
                                style={{fontSize:'100%',margin:'20px'}}
                                variant="outlined" color="primary"
                                onClick={()=>{
                                    if( user == 'papera' && password == 'G7mB3g84' ) {
                                        setDone(false)
                                    }
                                }}
                            >戻る</Button> */}
                        </Card>
                    </div>
                </div>
            </React.Fragment>
        )
    }

    return(
        <React.Fragment>
            <div style={{display:'grid',placeItems:'center',width:'100%'}}>
                <div className={styles.responsive} style={{display:'grid',placeItems:'center',height:'100vh',backgroundColor:'#D7E6EF'}}>
                    <Card className={styles.responsive_card}  style={{display:'grid',placeItems:'center',padding:'20px 30px',margin:'15px'}} variant="outlined">
                        <Typography style={{margin:'10px 0 0 0',fontSize:'100%'}} component="p" gutterBottom>
                            ユーザー名とパスワードを入力してください
                        </Typography>
                        <div style={{margin:'20px 0 0 0'}}>
                            <TextField 
                                style={{margin:'0 0 20px 0'}} 
                                id="standard-basic" 
                                label="user (p..."
                                onChange={(event)=>{setUser(event.target.value)}}
                            />
                            <div></div>
                            <TextField 
                                id="s"
                                label="password (G..."
                                onChange={(event)=>{setPassword(event.target.value)}}
                            />
                        </div>
                        <Button 
                            style={{fontSize:'100%',margin:'20px'}}
                            variant="outlined" color="primary"
                            onClick={()=>{
                                if( user == 'papera' && password == 'G7mB3g84' ) {
                                    setDone(true)
                                }
                            }}
                        >
                            決定
                        </Button>
                    </Card>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Tool_install