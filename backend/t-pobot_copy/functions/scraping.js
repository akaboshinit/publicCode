'use strict';

const functions = require('firebase-functions');
const puppeteer = require('puppeteer');
var admin = require("firebase-admin");
let db = admin.firestore();

const idref = db.collection('userids');
const ref = db.collection('users');

const iPhone = puppeteer.devices['iPhone X'];
const LOGINURL = 'https://t-po.tais.ac.jp/up/up/co/smartphone/login.jsp';

// let box = [{TID:'tp2041068dg',TPASSWORD:'m81r67RV',LINEID:'U75f48446e38cf44714b0f1941f9977e1',olddatalist1:[]}]

// let c = new Date().getTime();
// let cc = new Date().getTime() - c;
// console.log('実行時間：' + cc + 'ms');

exports.scraping = functions.region('asia-northeast1').pubsub
    .schedule('every 3 hours from 08:00 to 23:00')
    // .schedule('every 30 minutes')
    .timeZone('Asia/Tokyo')
    .onRun(async () => {
        const snapShot = await ref.get();
        let box = await snapShot.docs.map((array) => {
            let TID = array.get('id');
            let TPASSWORD = array.get('password');
            let LINEID = array.get('lineid');
            let olddatalist1 = array.get('datalist1');
            let boxitem = {TID,TPASSWORD,LINEID,olddatalist1};
            return boxitem
        });
        let updateid = [];

        const go = async(box,index,page) => {
            let ID = await box.TID;
            let PASSWORD = await box.TPASSWORD;
            let LINE = await box.LINEID;
            let OLDDATALIST1 = await box.olddatalist1;
            let waittime = index*4000;
            await page.waitFor(waittime);
            console.log('開始'+LINE);
            let timerstart = new Date().getTime();
            await page.goto(LOGINURL,{waitUntil: 'networkidle2'});
            await page.waitFor('#userid');
            await Promise.all([
                await page.type('#userid',ID),
                await page.type('#passwd',PASSWORD),
                await page.waitFor('#loginButtun')
            ]);
            await page.click('#loginButtun')

            await page.waitFor(1000);
            await page.evaluate(() => {
                selectMenu('0');
            });
            await page.waitFor('.read')
            let datacheak = await page.evaluate(() => {
                if( document.querySelector('.read > .graphicImageEx') != null ){
                    return true;
                } else {
                    return false;
                }
            });

            if( datacheak == true ){
                console.log('\n\n未読あり！');
                let data = await page.evaluate(() => {
                    let datalist = [];
                    const list = document.querySelectorAll('.rowHeight > .read > img.graphicImageEx');
                    list.forEach((value) => {
                        let id = value.id
                        let a = document.getElementById(id);
                        let listitem = a.closest('.rowHeight'); //祖先()の要素を取得
                        let title = listitem.lastElementChild
                        let span = title.querySelector('a > span');
                        let text = span.textContent;
                        datalist.push(text);
                    });
                    return datalist
                });
                let plusdata = await data.filter( x => 
                    !OLDDATALIST1.includes(x)
                ); //今の要素から昔の要素を消す // plusdata.lengthは新しく追加された要素
                if( 0 < plusdata.length ){
                    console.log('LINE送るわ'+index);
                    updateid.push(LINE);
                    console.log(updateid);
                    
                    let text = '';
                    for(let i = 0; i < plusdata.length; i++){
                        text += await '\n' + '\n' + plusdata[i]
                    };
                    let message1 = await '新しい通知は' + plusdata.length + '個あります！！';
                    let message2 = await text;
                    let timestamp = admin.firestore.FieldValue.serverTimestamp();
                    if( 10 <= plusdata.length ){
                        message1 = await '新しい通知は' + plusdata.length + '個あります！！\n（未読の通知が10個以上だと正常に作動しない場合があります）';
                    }
                    await ref.doc(LINE).set({
                        message1 : message1+message2,
                        datalist1: data,
                        sendtime  : timestamp,
                    },{ merge: true });
                };
                if( 0 == plusdata.length ){
                    console.log('新しくない')
                    await ref.doc(LINE).set({
                        datalist1: data,
                    },{merge:true})
                }
            };
            let timerstop = new Date().getTime() - timerstart;
            console.log(index + 'の実行時間：' + timerstop + 'ms');
            console.log('おわり'+index);
        }
        await (async()=>{
            let timerstart_v2 = new Date().getTime();
            const browser = await puppeteer.launch({
                // headless:false,
                // slowMo:50,
                timeout:300000,
                args: [
                    '--disable-gpu',
                    '--disable-dev-shm-usage',
                    '--disable-setuid-sandbox',
                    '--no-first-run',
                    '--no-sandbox',
                    '--no-zygote',
                    "--proxy-server='direct://'",
                    "--proxy-bypass-list=*",
                    '--single-process',
                ]});
            let page = await browser.newPage();
            await page.emulate(iPhone);
            await Promise.all(
                box.map( (box,index) => go(box,index,page))
            );
            await page.close();
            await browser.close();
            if( updateid != 0 ){
                let log = '';
                for(let i = 0; i < updateid.length; i++){
                    log += '--' + updateid[i]
                };
                let sendhistory = admin.firestore.FieldValue.serverTimestamp();
                await idref.doc('updateid').set({
                    updateid:updateid,
                    log     :admin.firestore.FieldValue.arrayUnion(sendhistory+':'+log)
                },{merge:true});
            }
            let timerstop_v2 = new Date().getTime() - timerstart_v2;
            console.log('全部の実行時間：' + timerstop_v2 + 'ms');
        })()
    });