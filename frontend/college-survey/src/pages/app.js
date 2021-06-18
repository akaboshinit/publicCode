import React, { useState } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import TextField from '@material-ui/core/TextField';

import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';

const searchClient = algoliasearch('DU2PULL82D', 'fabcf986ae64c88253e999c529af6c71');
// const index = searchClient.initIndex('college-survey');

const App = () => {
    const [subject, setSubject] = useState('')  
    return (
        <div>
        <Head>
            <title>大学授業アンケート</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
    
        <main>
            <div className={styles.main}>
            <form noValidate autoComplete="off">
                <TextField id="outlined-basic" label="授業名" variant="outlined" value={subject} onChange={(e)=>{setSubject(e.target.value)}} />
            </form>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScOzZL5dP7wSgoCK5u6G9ixRrY480DrBRE6tE4Rz9kEM2t8MQ/viewform?embedded=true" width="100%" height="538" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます…</iframe>
            </div>
        </main>
        
        </div>
    )
}

export default App