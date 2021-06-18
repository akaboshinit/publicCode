import React from 'react';

import styles from './box.module.css'

const Box = (props) => {
    if ( props.color == 'red' ) {
        return (
            <div style={{border: 'red solid 1px'}} className={styles.box}>
                {props.children}
            </div>
        )
    }
    return(
        <div className={styles.box}>
            {props.children}
        </div>
    )
}

export default Box