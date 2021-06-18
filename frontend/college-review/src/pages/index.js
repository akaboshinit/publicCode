import React, { useState,useEffect } from 'react';
import Head from 'next/head';

import { CustomAutocomplete,Surveybox,ContactForms } from '../components/index'

import fetch from 'isomorphic-unfetch'

import { makeStyles,Card,Typography,Link,Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, Configure, } from 'react-instantsearch-dom';
const searchClient = algoliasearch('DU2PULL82D', 'fabcf986ae64c88253e999c529af6c71');

const useStyles = makeStyles({
  centar: {
    backgroundColor: '##f8f8ff',
    padding: '5rem 20% 20%',
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: '25px',
    "@media (max-width: 700px)": {
      padding: '30px 5% 20%',
    }
  },
  card: {
    width: '100%',
    padding: '20px 10%',
    margin: '25px 0',
  },
  title: {
    fontSize: '1.5em',
    fontWeight: 'bold',
    marginBottom: '20px'
  },
  content: {
    fontSize: '1.1em'
  },
  a_card: {
    width: '500px',
    padding: '20px 10%',
    margin: '25px 0',
    "@media (max-width: 700px)": {
      width: '100%',
      // padding: '30px 5% 20%',
    }
  },
})

const Home = (props) => {
  const classes = useStyles();

  const [ query, setQuery ] = useState('')
  const [ value, setValue ] = useState('')
  const [ hits, setHits ] = useState('')
  const [ click, setClick ] = useState('')
  const [ contact, setContact ] = useState(false);

  const [ fetch_data, setFetch_data ] = useState([])

  useEffect(async()=>{
    if ( localStorage.getItem("Auth") != null ) {//authあったらログイン可
      setAuth(false)
      const local = localStorage.getItem("Auth")
      let box = [local]
      box.push(authfield)
      localStorage.setItem("Auth",box);
    }

    const reverse_fetch_data = props.fetch_data.reverse()
    setFetch_data(reverse_fetch_data)
    await fetch('https://script.google.com/macros/s/AKfycbyVpzXk2NcsAtfiKJ4m68RstXYh3fuggDIjmn-ANVYAA-GuaZY/exec')
      .then(response => response.json())
      .then((data) => {
        const reverse_data = data.reverse()
        setFetch_data(reverse_data)
      });
  },[])

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
  if( click != '' ) {
    if( value == '' ) { document.getElementById(click).scrollIntoView(true) }
  }

  const [ auth, setAuth ] = useState(false)
  const [ authfield, setAuthfield ] = useState('')
  if( auth ) {
    let authid = []
    fetch_data.map((array)=>{
      if ( array.auth != "" ){ return authid.push(array.auth) }
      return
    })
    const check = () => {
      if( authid.some((v) => v == authfield ) ) {
        setAuth(false)
        const local = localStorage.getItem("Auth")
        let box = [local]
        box.push(authfield)
        localStorage.setItem("Auth",box);
      } else {
        setAuthfield('間違っています')
      }
    }

    return(
      <>
      <Head>
        <title>大正授業レビュー</title>
        <link rel="icon" type="image/ico" href="/favicon.ico" />
        <script src="https://unpkg.com/stein-js-client" />
        <script>
            const store = new SteinStore(
                'https://api.steinhq.com/v1/storages/5f65a32b5d3cdc44fcd7d4dd'
            );
        </script>
      </Head>
      <div className={classes.centar} style={{height:'100vh',margin:'0'}}>
        <Card variant="outlined" className={classes.a_card} style={{width:'100%',textAlign:'center'}}>
          <Typography style={{textAlign:'left'}} className={classes.content} variant="h6">
            ログインIDが必要です<br/>
            <Link href="https://college-survey.netlify.app/" target="_brank">
              アンケートサイト
            </Link>から投稿することで<br/>
            IDを取得出来ます<br/>
          </Typography>
          <TextField
              fullWidth={true}
              label="ログインID"
              margin={"dense"}
              rows={1}
              type="text"
              value={authfield}
              onChange={(event)=>{setAuthfield(event.target.value)}}
          />
          <Button
            onClick={()=>{check()}}
            variant="contained"
            color="primary"
            autoFocus
            style={{width:'120px',height:'50px',marginTop:'20px'}}
          >確認
          </Button>
        </Card>
      </div>
      </>
    )
  }

  if( contact ){
    return (
      <div className={classes.centar}>
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

  return (
    <>
      <Head>
        <title>大正授業レビュー</title>
        <link rel="icon" type="image/ico" href="/favicon.ico" />
      </Head>

      <main className={classes.centar}>
        <Button
          onClick={()=>{setContact(true)}}
          variant="contained"
          color="primary"
          autoFocus
          style={{position:'absolute',top:'15px',right:'20%',width:'120px',height:'50px'}}
        > 問い合わせ
        </Button>
        <Card variant="outlined" className={classes.card} >
          <Typography className={classes.title} variant="h5" fontSize={10}>
            大正授業レビュー(仮)
          </Typography>
          <Typography className={classes.content} variant="h6">
            {/* この授業はどんな授業なのか？どれを選ぼうか？<br/>
            この教授は生徒に対して適当な先生なのか、真面目な先生なのか？<br/>
            これは楽単なのか？それとも落単なのか？<br/>
            そんな問題を解決します！<br/><br/>
            皆さんが投稿してくれる事でよりデータが正確になって行きます。<br/>
            投稿もお願いします！！！<br/> */}
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLScbsbYKmLIx7HZHW2tYoFFha9nwm08kTcCnEUt1tPqwfi4MhQ/viewform?usp=sf_link" target="_brank">
              アンケートサイト
            </Link>
          </Typography>
        </Card>
        <InstantSearch searchClient={searchClient} indexName="college-survey">
            <Configure hitsPerPage={10} />
            <CustomAutocomplete 
              onSuggestionSelected={(_, { suggestion }) => {setQuery(suggestion.name)}}
              onSuggestionCleared={() => {setQuery('')}}
              setValue={setValue}
              setClick={setClick}
            />
        </InstantSearch>

        <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
          {fetch_data.map(( array,index )=>{
            const isclick = (index === click)
            if( array.公開 == false ){ //公開状態で表示しない
              return <></>
            }
            if( value == '' ){
              return (
                <div key={index} id={index} style={{padding:'0',margin:'0'}}>
                  <Surveybox
                    index={index}
                    array={array}
                    click={isclick} 
                    setClick={setClick}
                  />
                </div>
              )
            } else {
              const names = array.授業名.split(":")[1]
              let name;let kanji;
              if ( name ) {
                name = names.split(",")
                kanji = name.map((array)=>{
                  const a = array.replace("　","")
                  return a
                })
              }
              if( value == array.授業名 || value == name || value == kanji ) {
                return (
                <div key={index}>
                  <Surveybox
                    index={index}
                    array={array}
                    click={isclick} 
                    setClick={setClick}
                  />
                </div>
                )
              }
              return
            }
          })}
        </div>

      </main>
    </>
  )
}

export default Home


Home.getInitialProps = async ( ctx ) => {
  let fetch_data;
  await fetch('https://script.google.com/macros/s/AKfycbyVpzXk2NcsAtfiKJ4m68RstXYh3fuggDIjmn-ANVYAA-GuaZY/exec')
      .then(response => response.json())
      .then((data) => {
        fetch_data = data
      });
  return { fetch_data: fetch_data }
}
