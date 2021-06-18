import React from 'react';

import Link from 'next/link';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';

import Typography from '@material-ui/core/Typography';
import { Box,Profcard } from '../components/index';

import styles from '../styles/wifi_info.module.scss';


const Home = () => {
    return (
        <React.Fragment>
        <div className={styles.grid}>
            <div className={`${styles.responsive_card} ${styles.grid}`} style={{height:'100%',padding:'20px 0'}}>
                <Box>
                    {/* <Typography>STEP.1</Typography> */}
                    <div className={styles.grid} >
                        <Typography>
                            t-po_tools説明ページ
                        </Typography>
                        <p className={styles.str_p}>
                            chromeの拡張機能を使って、ログインを簡単にするツールです！
                            今回は、すこし特別な方法を使って拡張機能を使っていきます。以下の文章をよく読んで進めてください。<br />
                            分からないことがあれば、twitterのDMなどでご連絡ください。
                        </p>
                        <Profcard />
                    </div>
                </Box>
                <Box>
                    <Typography>STEP.1</Typography>
                    <div className={styles.grid} >
                        <Typography>
                        </Typography>
                        <div className={styles.grid}>
                            <Button 
                                style={{fontSize:'100%',margin:'20px'}}
                                variant="outlined" color="primary"
                            >
                                <a href="/t-po_tools.zip" download="t-po_tools.zip">chrome拡張機能ダウンロード</a>
                            </Button>
                            <p className={styles.str_p}>
                                拡張機能ファイルをインストール
                            </p>
                        </div>
                    </div>
                </Box>
                <Box>
                    <Typography>STEP.2</Typography>
                    <div className={styles.grid} >
                        <Typography>
                            拡張機能ファイルを解凍
                        </Typography>
                        <p className={styles.str_p}>
                            ダウンロードしたファイルを開きます。
                        </p>
                        <Card className={`${styles.responsive_card} ${styles.grid}`}  style={{width:'94%',padding:'20px 30px',margin:'0 0 15px 0'}} variant="outlined">
                            <img width="100%" src={'/t-po_tools_photo/f2.png'} ></img>
                        </Card>
                        <p className={styles.str_p}>
                            圧縮フォルダーツールをクリックし、全て展開をクリックします。
                        </p>
                        <Card className={`${styles.responsive_card} ${styles.grid}`}  style={{width:'94%',padding:'20px 30px',margin:'0 0 15px 0'}} variant="outlined">
                            <img width="100%" src={'/t-po_tools_photo/f3.png'} ></img>
                        </Card>
                        <p className={styles.str_p}>
                            展開を押します。
                        </p>
                        <Card className={`${styles.responsive_card} ${styles.grid}`}  style={{width:'94%',padding:'20px 30px',margin:'0 0 15px 0'}} variant="outlined">
                            <img width="100%" src={'/t-po_tools_photo/f4.png'} ></img>
                        </Card>
                    </div>
                </Box>
                <Box>
                    <Typography>STEP.3</Typography>
                    <div className={styles.grid} >
                        <Typography>
                            ファイルの内容を変更する
                        </Typography>
                        {/* <p className={styles.str_p}>
                            ファイルの内容を変更して自分用にします。
                        </p> */}
                        <p className={styles.str_p}>
                            先ほど解凍したファイルの中に入ります。このファイルがあるところまで行きます
                        </p>
                        <Card className={`${styles.responsive_card} ${styles.grid}`}  style={{width:'94%',padding:'20px 30px',margin:'0 0 15px 0'}} variant="outlined">
                            <img width="100%" src={'/t-po_tools_photo/f6.png'} ></img>
                        </Card>
                        <p className={styles.str_p}>
                            content.jsと書かれたファイルを右クリックし、プログラムから開くにカーソルを合わせメモ帳を押します(メモ帳が無い場合は、別のプログラムを選択を押す)
                        </p>
                        <Card className={`${styles.responsive_card} ${styles.grid}`}  style={{width:'94%',padding:'20px 30px',margin:'0 0 15px 0'}} variant="outlined">
                            <img width="100%" src={'/t-po_tools_photo/f7.png'} ></img>
                        </Card>
                        <p className={styles.str_p}>
                            ファイルの内容を変更して自分用にします。<br />
                            2行目のconst usename = 'usename';の'usename'をt-poのログインIDに変えます。二行下にサンプルが有るので同じようにします。
                        </p>
                        <Card className={`${styles.responsive_card} ${styles.grid}`}  style={{width:'94%',padding:'20px 30px',margin:'0 0 15px 0'}} variant="outlined">
                            <img width="100%" src={'/t-po_tools_photo/f8.png'} ></img>
                        </Card>
                        <p className={styles.str_p}>
                            3行目のconst password = 'password';の'password'をt-poのパスワードに変えます。二行下にサンプルが有るので同じようにします。
                        </p>
                        <Card className={`${styles.responsive_card} ${styles.grid}`}  style={{width:'94%',padding:'20px 30px',margin:'0 0 15px 0'}} variant="outlined">
                            <img width="100%" src={'/t-po_tools_photo/f9.png'} ></img>
                        </Card>
                        <p className={styles.str_p}>
                            そして、左上のファイルボタンを押し上書き保存をします。
                        </p>
                        <Card className={`${styles.responsive_card} ${styles.grid}`}  style={{width:'94%',padding:'20px 30px',margin:'0 0 15px 0'}} variant="outlined">
                            <img width="100%" src={'/t-po_tools_photo/f10.png'} ></img>
                        </Card>
                    </div>
                </Box>
                <Box>
                    <Typography>STEP.4</Typography>
                    <div className={styles.grid} >
                        <Typography>
                            拡張機能一覧にアクセス
                        </Typography>
                        <p className={styles.str_p}>
                            ( chrome://extensions/ )このURLに入ると拡張機能の設定のページに行きます。
                        </p>
                        <p className={styles.str_p}>
                            左上の「パッケージ化されていない拡張機能を読み込む」を押します。
                        </p>
                        <Card className={`${styles.responsive_card} ${styles.grid}`}  style={{width:'94%',padding:'20px 30px',margin:'0 0 15px 0'}} variant="outlined">
                            <img width="100%" src={'/t-po_tools_photo/f1.png'} ></img>
                        </Card>
                        <p className={styles.str_p}>
                            先ほど解凍、編集を行ったファイルを選択し送信します。
                        </p>
                        <Box color='red'>
                            <p className={styles.str_p}>
                                以下のような表示が出た場合は、もう一つファイルの内部に入る必要があります。
                            </p>
                            <Card className={`${styles.responsive_card} ${styles.grid}`}  style={{width:'94%',padding:'20px 30px',margin:'0 0 15px 0'}} variant="outlined">
                                <img width="100%" src={'/t-po_tools_photo/f5.png'} ></img>
                            </Card>
                        </Box>
                        <p className={styles.str_p}>
                            以上で、拡張機能導入は終了です。
                        </p>
                        <p className={styles.str_p}>
                            下のt-poサイトに行き、試してみてください
                        </p>
                        <Button 
                            style={{fontSize:'100%',margin:'20px'}}
                            variant="outlined" color="primary"
                        >
                            <a target='_brank' href="https://t-po.tais.ac.jp/up/faces/login/Com00504A.jsp">T-poサイト</a>
                        </Button>
                    </div>
                </Box>
            </div>
        </div>
    </React.Fragment>
    )
}

export default Home