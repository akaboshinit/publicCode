'use strict';

const functions = require('firebase-functions');
const puppeteer = require('puppeteer');
var admin = require("firebase-admin");
let db = admin.firestore();

const idref = db.collection('userids');
const ref = db.collection('users');

const iPhone = puppeteer.devices['iPhone X'];
const LOGINURL = 'https://t-po.tais.ac.jp/up/up/co/smartphone/login.jsp';


exports.update = functions.region('asia-northeast1').firestore.document('userids/all')
    .onUpdate((snap, context) => {
    const newValue = snap.after.data(); // 更新後のデータ
    const waituser = newValue.waituser;
    const user1 = newValue.user1;
    let userbox = [];
    if( waituser == 1 ){
        return (async () => {
            let box = [];
            const a = await ref.doc(user1).get()
            let TID = await a.get('id');
            let TPASSWORD = await a.get('password');
            let LINEID = await a.get('lineid');
            await box.push({TID,TPASSWORD,LINEID});
    
            const go = async(box,browser) => {
                let page = await browser.newPage();
                await page.emulate(iPhone);
                let ID = await box.TID;
                let PASSWORD = await box.TPASSWORD;
                let LINE = await box.LINEID;
                console.log('1');
                let timerstart = new Date().getTime();
                await page.goto(LOGINURL,{waitUntil: 'networkidle2'});
                await page.waitFor('#userid');
                await Promise.all([
                    await page.type('#userid',ID),
                    await page.type('#passwd',PASSWORD),
                    await page.waitFor('#loginButtun')
                ]);
                console.log(2);
                await page.click('#loginButtun')

                let datacheak = await page.evaluate(() => {
                    if( document.querySelector('#errorMess > b') != null ){
                        return true
                    } else {
                        return false
                    }
                });
                let message1 = '';
                let message2 = '';
                let data = [];
                let timestamp = await admin.firestore.FieldValue.serverTimestamp();
                if( datacheak == true ){ //ログインがtrue
                    console.log('3');
                    await page.waitFor(1500);
                    await page.evaluate(() => {
                        selectMenu('0');
                    });
                    await page.waitFor('.graphicImageEx')
                    let datacheak_a = await page.evaluate(() => {
                        if( document.querySelector('.read > .graphicImageEx') != null ){
                            return true;
                        } else {
                            return false;
                        }
                    });
                    console.log('4');
                    if( datacheak_a == true ){
                        console.log('5');
                        data = await page.evaluate(() => {
                            if( document.querySelector('.graphicImageEx') != null ){
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
                            }
                        });
                        console.log('6');
                        console.log(data);
                        let text = '';
    
                        for(let i = 0; i < data.length; i++){
                            text += '\n' + '\n' + data[i]
                        };
                        message1 = await '新しい通知は' + data.length + '個あります！！';
                        message2 = await text;
                        if( 10 <= data.length ){
                            message1 = await '新しい通知は' + data.length + '個あります！！\n（未読の通知が10個以上だと正常に作動しない場合があります）';
                        }
                    }
                } else if ( datacheak == false ){
                    message1 = '新しい通知は0個あります！！';
                    message2 = '\nIDかパスワードのどちらか、まちがっているよ\nもう一度登録からやり直してみてね';
                    data = ['Error']
                }
                await ref.doc(LINE).set({
                    message1 : message1+message2,
                    datalist1: data,
                    sendtime : timestamp,
                },{ merge: true });
                userbox.push(user1);
                let timerstop = new Date().getTime() - timerstart;
                console.log('新規登録の実行時間：' + timerstop + 'ms');
                console.log('おわり！！！');
                await page.close();
            }
            await (async()=>{
                const browser = await puppeteer.launch({
                    timeout:60000,
                    args:[
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
                await Promise.all(
                    box.map( box => go(box,browser))
                );
                await browser.close();
                await idref.doc('updateid').set({
                    updateid:userbox
                },{merge:true})
                await idref.doc('all').set({
                    waituser : 0
                },{merge:true})
            })();
        })();
    };
    if( waituser == 0 ){
        console.log('ぴ');
        return
    }
});