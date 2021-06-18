import React, { useState,useEffect } from 'react';
import styles from '../styles/Home.module.css'
import { Form, CustomAutocomplete, ContactForms } from '../components/index'
import { ThemeProvider,makeStyles,TextField,Button,Card,Typography,Link } from '@material-ui/core';
import theme from '../theme'

import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, Configure, } from 'react-instantsearch-dom';
const searchClient = algoliasearch('DU2PULL82D', 'fabcf986ae64c88253e999c529af6c71');

import fetch from 'node-fetch';

const useStyles = makeStyles({
  button: {
    width: '35%',
    margin: '30px auto'
  },
  resend: {
    width: '60%',
    margin: '20px'
  },
  input: {
    display: 'none'
  },
  iframe: {
    display: 'none'
  },
  card: {
    width: '100%',
    padding: '20px 10%',
    margin: '30px 0'
  },
  title: {
    fontSize: '1.8em',
    fontWeight: 'bold',
    marginBottom: '20px'
  },
  content: {
    fontSize: '1.2em'
  },
  textfield: {
    width: '100%'
  },
  red: {
    margin: '15px 0',
    color: 'red',
    fontSize: '1.2em'
  },
  main: {
    padding: '4rem 0 0',
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '60%',
    margin: '0 20%',
  },
  card_last: {
    width: '500px',
    padding: '20px 10%',
    margin: '30px 0'
  },
  "@media (max-width: 600px)": {
    main: {
      padding: '4rem 0 0',
      flex: '1',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '90%',
      margin: '0 5%'
    },
    button: {
      width: '35%',
      margin: '30px auto'
    },
    resend: {
      width: '60%',
      margin: '20px'
    },
    input: {
      display: 'none'
    },
    iframe: {
      display: 'none'
    },
    card: {
      width: '100%',
      padding: '20px 10%',
      // margin: '30px 0'
    },
    title: {
      fontSize: '1.5em',
      fontWeight: 'bold',
      marginBottom: '20px'
    },
    content: {
      fontSize: '1.1em'
    },
    textfield: {
      width: '100%'
    },
    red: {
      margin: '20px',
      color: 'red',
      fontSize: '1.2em'
    },
    card_last: {
      width: '100%',
      padding: '20px 10%',
      margin: '30px 0'
    },
  }
})

const Home = (props) => {
  const classes = useStyles();
  const [ query, setQuery ] = useState('');
  const [ value, setValue ] = useState('');
  const [ send , setSend  ] = useState(false);
  const [ click, setClick ] = useState(false);
  const [ contact, setContact ] = useState(false);

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

  const [ auth, setAuth ] = useState('');
  const [ total, setTotal ] = useState(0);

  useEffect(()=>{
    let seed = []
    for( let i=10000 ; i < 99999 ; i++ ){
      seed.push(i)
    }

    for( let i=0 ; i < 100000 ; i++ ){
      let a = Math.floor( Math.random() * seed.length );
      let b = Math.floor( Math.random() * seed.length );

      let tmp = seed[a];
      seed[a] = seed[b]
      seed[b] = tmp
    }
    setAuth(seed[Math.floor( Math.random() * seed.length )])
    setTimeout(()=>{setTotal(props.fetch_data_length)},10) //setTotal(props.fetch_data_length + (Math.floor( Math.random() * 30 ) + 20))
  },[])

  if( contact ){
    return (
      <div className={classes.main}>
        <Card variant="outlined" className={classes.card}>
          <Button
            onClick={()=>{setContact(false)}}
            variant="contained"
            color="primary"
            autoFocus
            style={{position:'absolute',top:'15px',right:'20%',width:'120px',height:'50px'}}
          >戻る
          </Button>
          <ContactForms
            timestamp={timestampbox()}
          />
        </Card>
      </div>
    )
  }

  if( !send ) {
    return (
      <>
        <ThemeProvider theme={theme} >
            <iframe name="hidden_iframe" id="hidden_iframe" style={{display:'none'}} onLoad=""></iframe>

            <div className={classes.main} >
                <Button
                  onClick={()=>{setContact(true);ga('send', 'event', 'contact','click', 'open',1 );}}
                  variant="contained"
                  color="primary"
                  autoFocus
                  style={{position:'absolute',top:'15px',right:'20%',width:'120px',height:'50px'}}
                > 問い合わせ
                </Button>
                <Card variant="outlined" className={classes.card} >
                  <Typography className={classes.title} style={{textAlign:'center',margin:'0'}} variant="h4">
                    大正授業レビュー(仮)<br/>アンケート
                  </Typography>
                </Card>
                <Card variant="outlined" className={classes.card} style={{margin:'0'}} >
                  <Typography className={classes.content} variant="h6">
                    {/* 大学の授業のレビューサイトを作りたいんだがなァ<br/>
                    データが少ねェ、、、<br/>
                    どころかほぼねェ、、、、、<br/>
                    みんなの力が必要だ、オラにデータを分けくてくれェ！！<br/>
                    履修登録困っている誰かにデータをくれェ！！<br/><br/> */}
                    大学の授業のレビューサイトを作っています。
                    データ集めの為にアンケート協力お願いします<br/><br/>
                    {/* この授業はどんな授業なのか、どれを選ぼうか？<br/>
                    この教授は生徒に対して適当な先生なのか、真面目な先生なのか？<br/>
                    この授業は楽単なのか、それとも落単なのか？<br/>
                    履修登録目前ですが、困っていませんか？
                    そんな問題を解決します！<br/><br/>
                    
                    このアンケートは「大正授業レビュー(仮)」のデータ集め用のアンケートです。<br/><br/>
                    「大正授業レビュー(仮)」とは、大学の授業を評価し投稿することができるサイトです。 */}
                    {/* サイトは、現在制作中ですがデータ収集のため、アンケートを行っています。<br/> */}
                    現段階では、2020年の春学期、1.2学期の情報のみ登録お願いします。<br/>
                    ご協力お願いします。目標はアンケート総数500個です。<br/>
                    誰かの為に思うこと、出来事をできるだけそのまま書いてください。<br/>
                    {/* 自分が受けた全ての授業分のアンケートを答えたって良いんだからねェ！<br/> */}
                    ここで集めた情報は全て匿名で扱われサイト作成、運営以外の目的に使用しません。<br/>
                    <Link href="https://college-review.netlify.app/" className={classes.content} target="_brank">
                      大正授業レビュー(仮)<br/><br/>
                    </Link>
                  </Typography>
                </Card>
                <Typography className={classes.content} style={{marginTop:'20px'}} variant="h6">
                  現在アンケート回答数:{total}
                </Typography>
                <Typography className={classes.red} variant="h4">
                  最後のコメント以外<br/>全ての項目が必須項目<br/>
                  授業が存在しない場合ページお問い合わせください<br/>
                  同じ授業が並んでいた場合どちらで回答いただいても
                  構わないです<br/>
                </Typography>
              </div>
              <form className={styles.main} 
                method="post" 
                target="hidden_iframe" 
                onSubmit={()=>{setTimeout(async()=>{
                  const url = 'https://api.netlify.com/build_hooks/5f76c9debf48a0aa48ec29df';
                  await fetch(url, {
                      method: 'POST',
                  })
                  setSend(true)
                },1000)}} 
                action="https://docs.google.com/forms/u/1/d/e/1FAIpQLScOzZL5dP7wSgoCK5u6G9ixRrY480DrBRE6tE4Rz9kEM2t8MQ/formResponse"
              >
                <InstantSearch searchClient={searchClient} indexName="college-survey">
                  <Configure hitsPerPage={10} />
                  <CustomAutocomplete 
                    onSuggestionSelected={(_, { suggestion }) => {setQuery(suggestion.name)}}
                    onSuggestionCleared={() => {setQuery('')}}
                    setValue={setValue}
                  />
                </InstantSearch>
                
                  <input className={classes.input} name="entry.939016402" value={timestampbox()} type="text" required="required" />
                  <input className={classes.input} name="entry.609631449" value={auth} type="text" required="required" />
                  <TextField
                    name="entry.593319889"
                    label="公開" 
                    multiline
                    value="true"
                    style={{display:'none'}}
                  />
                  <input className={classes.input} name="entry.257642200" value={value} type="text" required="required" />
                
                <Form
                  title="評価方法(複数選択可)"
                  name="entry.1201938419"
                  _1="期末テスト"
                  _2="小・中間テスト"
                  _3="出席"
                  _4="発表"
                  _5="レポート"
                />
                <Form
                  title="出欠の頻度"
                  name="entry.1238122715"
                  _1="全く取らない"
                  _2="たまにとる"
                  _3="だいたいとる"
                  _4="毎回とる"
                  _5=""
                />
                <Form
                  title="予復習の手間"
                  name="entry.1637205686"
                  _1="無し"
                  _2="少し手がかかる"
                  _3="割と大変"
                  _4="死ぬ気でやる"
                  _5=""
                />
                <Form
                  title="講義での説明"
                  name="entry.877740417"
                  _1="分かりやすい"
                  _2="まあ分かる"
                  _3="分かりにくい"
                  _4="理解できない"
                  _5="説明しない"
                />
                <Form
                  title="先生の講義への熱意"
                  name="entry.1513897418"
                  _1="溢れる"
                  _2="まあまあ"
                  _3="無いことは無い"
                  _4="一切無い"
                  _5="オンデマンド式で確認できない"
                />
                <Form
                  title="試験レポート難易度"
                  name="entry.211188687"
                  _1="目を閉じても解ける"
                  _2="易しい"
                  _3="難しい"
                  _4="解けない"
                  _5="試験レポート無し"
                />
                <Form
                  title="単位の期待度"
                  name="entry.1808350453"
                  _1="履修即単位"
                  _2="楽に取れる"
                  _3="それなりに厳しい"
                  _4="時間を返してほしい"
                  _5=""
                />
                <Form
                  title="講義の推奨度"
                  name="entry.1239516261"
                  _1="是非取るべき"
                  _2="取る価値あり"
                  _3="取る価値無し"
                  _4="取ると後悔する"
                  _5=""
                />
                <Form
                  title="スコア"
                  name="entry.2140083946"
                  _1="1"
                  _2="2"
                  _3="3"
                  _4="4"
                  _5="5"
                />
                <TextField
                  className={classes.textfield}
                  name="entry.603900805"
                  label="(任意)コメント・補足" 
                  variant="outlined" 
                  placeholder="授業は簡単だけど、地味に先生がうざい、等々"
                  multiline
                  rows={20}
                  // rowsMax={20}
                />

                <Button 
                  variant="contained" 
                  type="submit" 
                  size="large" 
                  color="primary" 
                  className={classes.button}
                  onClick={()=>{setClick(true);}}
                  >
                送信
                </Button>
                <Lastcard click={click} />
            </form>
        </ThemeProvider>
        
      </>
    )
  } else {
    return(
      <>
        <ThemeProvider theme={theme}>
          <div className={classes.main}>
            <Card variant="outlined" className={classes.card_last} >
              <Typography className={classes.title} style={{width:'100%',textAlign:'center'}} variant="h5" fontSize={10}>
                <div>レビューサイト閲覧ID</div>
                <div>{auth}</div>
              </Typography>
              <Typography className={classes.content} variant="h6">
                  上記のIDで評価サイトを閲覧できます<br/>
                  コピーしておいてください<br/>
                  2回目からはIDを入力された方は<br/>
                  ID無しで閲覧できます<br/>
                </Typography>
              <Link href="https://college-review.netlify.app/" className={classes.content} target="_brank">
                大正授業レビュー(仮)<br/><br/>
              </Link>
            </Card>
  
            <Card variant="outlined" className={classes.card} >
              <Typography className={classes.title} variant="h5" fontSize={10}>
                回答いただきありがとうございました。
                有効に活用させていただきます。<br/>
                よければ他の授業も記入お願いします。<br/>
              </Typography>
              <Typography className={classes.content} variant="h6">
                このデータは、サイト作成以外の目的に使用しません。<br/>
                利用する場合も匿名で利用させていただきます。<br/>
                過度の誹謗中傷等は掲載する事が出来ません。<br/>
              </Typography>
              {/* <Link href="https://college-review.netlify.app/" className={classes.content} target="_brank">
                大正授業レビュー(仮)
              </Link> */}
              <Button className={classes.resend} variant="outlined" color="primary" href="https://college-survey.netlify.app/">
                もう一度記入する
              </Button>
            </Card>
          </div>
        </ThemeProvider>
      </>
    )
  }
}

export default Home

Home.getInitialProps = async ( ctx ) => {
  let fetch_data;
  await fetch('https://script.google.com/macros/s/AKfycbyVpzXk2NcsAtfiKJ4m68RstXYh3fuggDIjmn-ANVYAA-GuaZY/exec')
    .then(response => response.json())
    .then((data) => {
      fetch_data = data
    });
    const fetch_data_length = fetch_data.length
  return { fetch_data_length: fetch_data_length }
}


const Lastcard = (props) => {
  const classes = useStyles();
  if ( props.click ) {
    return (
      <Card variant="outlined" className={classes.card} >
        <Typography variant="h6">
          送信ボタンを押して画面が変わらない場合は
          必要事項が抜けているかもしれません。<br/>
          最後のコメント以外は、全ての項目が必須項目です。
        </Typography>
      </Card>
    )
  } else {
    return (
      <div></div>
    )
  }
}