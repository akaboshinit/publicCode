import React, {useEffect} from 'react';

import Head from 'next/head';
import Link from 'next/link';

import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

import { Profcard } from '../components/index';

import styles from '../styles/wifi_success.module.scss';

const Wifi_success = () => {

//     useEffect(()=>{
//         setTimeout(function () {
//             document.getElementsByTagName("html")[0].classList.add("loading-delay");
//         }, 3000);
//     },[])
    return (
        <React.Fragment>
            <Head>
                <title>wifi接続完了!</title>
            </Head>
            <div style={{display:'grid',placeItems:'center',padding:'20px 0'}}>
                {/* <Card style={{width:'500px',height:'500px',display:'grid',placeItems:'center'}}> */}
                    <h2 
                    className={styles.types}
                    style={{
                        // width:'350px',
                        // height:'350px',
                        fontSize:'300%',
                        // fontFamily:'Courgette',
                        // background: 'linear-gradient(45deg, rgba(254,212,117,1) 0%,rgba(229,61,93,1) 50%,rgba(194,49,134,1) 70%,rgba(156,56,187,1) 100%)',
                        // borderRadius: '25px',
                        // boxShadow: '0 5px 25px rgba(0,0,0,.15)',
                        // color: '#fff',
                        // fontWeight: '400',
                        // textDecoration: 'none',
                        display:'grid',
                        placeItems:'center',
                        // margin:'30px',
                        border:'black solid 1px',
                        borderRadius:'5%'
                    }}>
                        {/* Connect<br/>Success! */}
                        接続完了!
                    </h2>

                {/* <Card style={{display:'grid',placeItems:'center',width:'350px',padding:'5px',margin:'15px',fontSize:'80%'}} variant="outlined">
                </Card> */}
                <Button 
                    style={{fontSize:'100%',margin:'5px 0 0 0'}}
                    variant="outlined" color="primary"
                >
                    <Link href={'/wifi_info'}>
                        <a style={{padding:'5px 0'}}>使い方ページ</a>
                    </Link>
                </Button>
                <Button 
                    style={{fontSize:'100%',margin:'5px 0 0 0'}}
                    variant="outlined" color="primary"
                >
                    <Link href={'/tool_install'}>
                        <a style={{padding:'5px 0'}}>iPhone,PC(windows)用インストールページ</a>
                    </Link>
                </Button>
                <Button
                    style={{fontSize:'100%',margin:'5px 0 5px 0'}} 
                    variant="outlined" color="primary"
                >
                    <a href="https://forms.gle/2fXtux4QxcGUZyrX6" target="_brank" >
                        問い合わせ・質問・依頼<br />(DMでも可)
                    </a>
                </Button>

                <Profcard />
            </div>
        </React.Fragment>
    )
}

export default Wifi_success
