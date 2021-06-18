import React from 'react';

import Card from '@material-ui/core/Card';

import styles from './profcard.module.css';

const Profcard = () => {
    return(
        <div className={styles.box}>
            <Card style={{width:'100%',padding:'15px 30px',margin:'15px 0',fontSize:'100%'}} variant="outlined">
                <a href="https://twitter.com/red_16__/" target="_brank" style={{width:'100%',height:'100%'}}>
                    <p style={{fontSize:'125%',margin:'0 0 10px 0'}}>
                        つくった人
                    </p>
                    <div style={{display:'flex',justifyContent:'center',alignItems: 'center'}}>
                        <img style={{borderRadius:'50%',width:'60px',height:'60px',marginRight:'20px'}} src="https://pbs.twimg.com/profile_images/1258785687626637312/UK_NPx81_200x200.jpg"/>
                        <div style={{marginRight:'20px'}}>
                            <p style={{margin:'0'}}>
                                あかぼし
                            </p>
                            <p style={{margin:'0'}}>
                                @red_16__
                            </p>
                        </div>
                    </div>
                </a>
            </Card>
        </div>
    )
}

export default Profcard