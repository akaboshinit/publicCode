import React from 'react';

import Link from 'next/link';

import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { Box,Profcard } from '../components/index';

import styles from '../styles/wifi_info.module.scss';

const Wifi_info = () => {

    return(
    <React.Fragment>
        <div className={styles.grid}>
            <div className={`${styles.responsive} ${styles.grid}`} style={{height:'100%',padding:'20px 0'}}>
                <div className={styles.responsive_card}>
                    <Box color='red'>
                        <Typography>注意事項・確認事項</Typography>
                        <div className={styles.grid} >
                            <p className={styles.str_p}>
                                ツールを利用するにはインターネットの許可などが必要です、
                                最低限のアクセスとなっていますが許可できる方のみ利用してください。
                                また、その際に不利益等を被った場合、このサイトは責任を取ることはできません。
                            </p>
                        </div>
                    </Box>
                </div>
                <p className={styles.title_mini}>
                    IPhoneでのいろいろ
                </p>
                <Accordion style={{margin:'10px 0'}} className={styles.responsive_card}>
                    <AccordionSummary
                        // expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                    >
                        <Typography>ダウンロード</Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{display:'block'}}>
                        <Box color='red'>
                            <Typography>ショートカットアプリの利用</Typography>
                            <div className={styles.grid} >
                                <p className={styles.str_p}>
                                    iPhoneの標準搭載のショートカットアプリを利用します。
                                    インストールされていない場合、先にインストールをしてください。
                                </p>
                            </div>
                        </Box>
                        <Box>
                            <Typography>STEP.1</Typography>
                            <div className={styles.grid} >
                                <Typography>
                                    iPhoneショートカットのダウンロード
                                </Typography>
                                <Button 
                                    style={{fontSize:'100%',margin:'20px'}}
                                    variant="outlined" color="primary"
                                >
                                    <Link href={'/tool_install'}>
                                        <a>iPhoneショートカット<br />ダウンロード</a>
                                    </Link>
                                </Button>
                            </div>
                        </Box>
                        <Box>
                            <Typography>STEP.2</Typography>
                            <div className={styles.grid}>
                                <p className={styles.str_p}>
                                    表示された画面を下にスクロールすると
                                    「信頼されていないショートカットを追加」を押し、
                                    ショートカットを追加します。
                                </p>
                                <Card className={`${styles.responsive_card} ${styles.grid}`}  style={{width:'94%',padding:'20px 30px',margin:'0 0 15px 0'}} variant="outlined">
                                    <img width="100%" src={'/tuika.png'} ></img>
                                </Card>
                            </div>
                        </Box>
                    </AccordionDetails>
                </Accordion>
                <Accordion style={{margin:'10px 0'}} className={styles.responsive_card}>
                    <AccordionSummary
                        // expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                    >
                        <Typography>使う直前にやること</Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{display:'block'}}>
                        <p style={{margin:'12px 0'}}>
                            これを設定してないとまったく使えないよ！
                            だけど
                            「taisho」のwifiに繋ぐ時だけしか設定できないから
                            直前にやってみてね！<br />
                        </p>
                        <Box>
                            <Typography>STEP.1</Typography>
                            <div className={styles.grid}>
                                <p className={styles.str_p}>
                                    wifiの設定画面を開き<br />
                                    右側にある i のマークを押します
                                </p>
                                <Card className={`${styles.responsive_card} ${styles.grid}`}  style={{width:'94%',padding:'20px 30px',margin:'0 0 15px 0'}} variant="outlined">
                                    <img width="100%" src={'/wifi_setting.png'} ></img>
                                </Card>
                            </div>
                        </Box>
                        <Box>
                            <Typography>STEP.2</Typography>
                            <div className={styles.grid}>
                                <p className={styles.str_p}>
                                    以下のように
                                    自動接続をON<br />
                                    自動ログインをOFFにします
                                </p>
                            <Card className={`${styles.responsive_card} ${styles.grid}`}  style={{width:'94%',padding:'20px 30px',margin:'0 0 15px 0'}} variant="outlined">
                                <img width="100%" src={'/taisho_setting.png'} ></img>
                            </Card>
                            </div>
                        </Box>
                    </AccordionDetails>
                </Accordion>
                <Accordion style={{margin:'10px 0'}} className={styles.responsive_card}>
                    <AccordionSummary
                        // expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                    >
                        <Typography>使い方</Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{display:'block'}}>
                        <Box>
                            <Typography>STEP.1</Typography>
                            <div className={styles.grid}>
                                <p className={styles.str_p}>
                                    ショートカットアプリを開き
                                    以前ダウンロードしたショートカットをタップ
                                    (特にいじってない場合、名前は「大正wifiツール」です)
                                    
                                </p>
                                <Card className={`${styles.responsive_card} ${styles.grid}`}  style={{width:'94%',padding:'20px 30px',margin:'0 0 15px 0'}} variant="outlined">
                                    <img width="100%" src={'/shortcutlist.png'} ></img>
                                </Card>
                            </div>
                        </Box>
                        <Box color="red">
                            <Typography>STEP.???</Typography>
                            <div className={styles.grid}>
                                <p className={styles.str_p}>
                                    最初に利用した場合のみ
                                    インターネットのアクセスを許可するか確認が出ます。<br />
                                    許可してあげてください。
                                </p>
                                <Card className={`${styles.responsive_card} ${styles.grid}`}  style={{width:'94%',padding:'20px 30px',margin:'0 0 15px 0'}} variant="outlined">
                                    <img width="100%" src={'/kyoka.png'} ></img>
                                </Card>
                            </div>
                        </Box>
                        <Box>
                            <Typography>STEP.2</Typography>
                            <div className={styles.grid}>
                                <p className={styles.str_p}>
                                    少し時間がかかって以下のようなサイトが表示されたら接続完了です。<br /><br />
                                    接続の確認の為webサイトを表示しています。
                                </p>
                                <Card className={`${styles.responsive_card} ${styles.grid}`}  style={{width:'94%',padding:'20px 30px',margin:'0 0 15px 0'}} variant="outlined">
                                    <img width="100%" src={'/wifi_success.png'} ></img>
                                </Card>
                                <p className={styles.str_p}>
                                    ・「taisho」wifiに繋がっていなかった場合<br />
                                    ・正常に繋がらなかった場合<br />
                                    ・予期しないエラーが起こった場合<br />
                                    「エラーが起きました」と表示されます。<br />
                                    その他の場合で上手く作動しなかった場合
                                    twitterのDMや
                                    <a href="https://forms.gle/2fXtux4QxcGUZyrX6" target="_brank" style={{color:'blue'}} >
                                        問い合わせ
                                    </a>
                                    にてご連絡ください。<br /><br />
                                    (ちなみにwifiに正常に接続出来ている状態で実行すると
                                    エラーも起きず成功のページも表示されないため、お勧めしません)
                                </p>
                            </div>
                        </Box>
                    </AccordionDetails>
                </Accordion>
                <p className={styles.title_mini}>
                    PC(windows)でのいろいろ
                </p>
                <Accordion style={{margin:'10px 0'}} className={styles.responsive_card}>
                    <AccordionSummary
                        // expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                    >
                        <Typography>ダウンロード</Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{display:'block'}}>
                        <Box>
                            <Typography>STEP.?</Typography>
                            <div className={styles.grid} >
                                <Typography>
                                    PC(windows)ファイルのダウンロード
                                </Typography>
                                <Button 
                                    style={{fontSize:'100%',margin:'20px'}}
                                    variant="outlined" color="primary"
                                >
                                    <Link href={'/tool_install'}>
                                        <a>PC(windows)ファイル<br />ダウンロード</a>
                                    </Link>
                                </Button>
                            </div>
                        </Box>
                    </AccordionDetails>
                </Accordion>
                <Accordion style={{margin:'10px 0'}} className={styles.responsive_card}>
                    <AccordionSummary
                        // expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                    >
                        <Typography>使い方</Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{display:'block'}}>
                        <Box>
                            <Typography>STEP.? </Typography>
                            <div className={styles.grid}>
                                <p className={styles.str_p}>
                                    ファイルをダウンロードして解凍し<br />
                                    出てきたbatファイルを実行します。
                                </p>
                            </div>
                        </Box>
                        <Box>
                            <p className={styles.str_p}>
                                <a href="https://forms.gle/2fXtux4QxcGUZyrX6" target="_brank" style={{color:'blue'}} >
                                    工事中！！(急かすにはクリック！)
                                </a>
                            </p>
                        </Box>
                    </AccordionDetails>
                </Accordion>
                <Profcard />
            </div>
        </div>
    </React.Fragment>
    )
}

export default Wifi_info