'use strict';

const express = require('express');
const line = require('@line/bot-sdk');
const functions = require('firebase-functions');
var admin = require("firebase-admin");
var serviceAccount = require("./t-pobot-copy-6db93-firebase-adminsdk-o1o1r-7bfc66c0bf.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://t-pobot-copy-6db93.firebaseio.com"
});
let db = admin.firestore();
const timestamp = admin.firestore.FieldValue.serverTimestamp();

if (!process.env.FUNCTION_NAME || process.env.FUNCTION_NAME === 'scraping-scraping') {
    exports.scraping = require('./scraping');
}
if (!process.env.FUNCTION_NAME || process.env.FUNCTION_NAME === 'update-update') {
    exports.update = require('./update');
}
if (!process.env.FUNCTION_NAME || process.env.FUNCTION_NAME === 'updateid-updateid') {
    exports.updateid = require('./updateid');
}

// let timerstart = new Date().getTime();
// let timerstop = new Date().getTime() - timerstart;
// console.log(timerstop);

const app = express();

app.post('/webhook', line.middleware(config), (req, res) => {
    // console.log(req.body.events);

    Promise
        .all(req.body.events.map(handleEvent))
        .then((result) => res.json(result));
});

const client = new line.Client(config);

const idref = db.collection('userids');
const ref = db.collection('users');

let help = false;
let helpmessage = false;

const handleEvent = async(event) => {
    await console.log('---------------------------------------------------------------------------------------');
    if (event.type !== 'message') {
        return Promise.resolve(null);
    }

    // 追加：Webhookの接続確認リクエスト対策
    if (event.replyToken === '00000000000000000000000000000000') {
        return Promise.resolve(null);
    }

    const lineid = await event.source.userId;

    const userserch = await idref.doc(lineid).get();
    const userset = await idref.doc(lineid);
    const TID = await userserch.get('id');
    const TPASSWORD = await userserch.get('password');

    const premessage = await idref.doc('all').get();
    let messageserch = await premessage;
    if( TID != undefined ){
        messageserch = await ref.doc(lineid).get();
    }

    switch(event.message.type){

        case 'text':
            let textcontent = event.message.text;
            let replytext = '';

            if( textcontent.indexOf(',') == 11 ){
                let signtext = await textcontent.split(',')
                userset.set(
                    {
                        id         :signtext[0],
                        password   :signtext[1],
                        singsettime:timestamp
                    },{ merge: true });
                client.replyMessage(event.replyToken, [
                    {
                        type: 'template',
                        altText: "登録？",
                        template: {
                            type: "confirm",
                            text: signtext[0]+'\n'+signtext[1]+'\n'+'これを登録する？',
                            actions: [
                                {
                                    type: "message",
                                    label: "登録する！!",
                                    text: "登録する！!"
                                },
                                {
                                    type: "message",
                                    label: "ちがう",
                                    text: "ちがう"
                                }
                            ]
                        }
                    }
                ]);
            } else {
            let messagesend = false;
            switch(textcontent){
                case '登録する！!':
                    messagesend = true;
                    await ref.doc(lineid).set({
                        id      :TID,
                        password:TPASSWORD,
                        message1:'新しい通知は0個あります！！'+'\n\n'+'まだ通知はありません！',
                        lineid  :lineid,
                    },{ merge: true });
                    await idref.doc('all').set({
                        waituser: 1,
                        user1   :lineid
                    },{merge:true});
                    replytext = await TID + '\n' + TPASSWORD + '\nこのIDとパスワードを\n登録しました！\n次の通知が来るまで\nしばらく待っててね！';
                    break;
                case 'ヘルプ':
                    client.replyMessage(event.replyToken, [
                        {
                            type: 'template',
                            altText: "なんのヘルプ？",
                            template: {
                                type: "confirm",
                                text: 'なんのヘルプ？',
                                actions: [
                                    {
                                        type: "message",
                                        label: "登録のやり方",
                                        text: "登録のやり方"
                                    },
                                    {
                                        type: "message",
                                        label: "問い合わせ",
                                        text: "問い合わせ"
                                    }
                                ]
                            }
                        }
                    ]);
                    break
                case '登録の仕方':
                    messagesend = true;
                    replytext = 't-poのIDのt-poのパスワードを\n入力してください。\nIDとパスワードの間にコンマを\n挟まないと正しく認識しないため\n注意してください。\n必要事項を記入して\n送信してください\n例「tp1020304gl,cbYF1234'
                    break
                case '問い合わせ':
                    messagesend = true;
                    replytext = '問い合わせ内容を\n入力してください';
                    help = true;
                    break
                default:
                    messagesend = true;
                        if( helpmessage == true ){messagesend = false;}
                    // const textbox = ['困った時はヘルプと打ってね',textcontent+'って言った？','We love 巣鴨？'];
                    // const textbox = ['https://t-po.tais.ac.jp/up/up/co/smartphone/login.jsp'];
                    // const randomtext = textbox[Math.floor(Math.random() * textbox.length)];
                    // replytext = randomtext;
                    break;
                }
                if( messagesend == true ){
                    client.replyMessage(event.replyToken, [
                        {
                            type: 'text',
                            text: replytext //実際に返信の言葉を入れる箇所
                        }
                    ]);
                }
                if( helpmessage == true ){
                    let helpmessage1 = textcontent+':'+lineid;
                    idref.doc('help').update({
                        helpbox: admin.firestore.FieldValue.arrayUnion(helpmessage1)
                    });
                    client.replyMessage(event.replyToken, [
                        {
                            type: 'text',
                            text: '送信しました！' //実際に返信の言葉を入れる箇所
                        }
                    ]);
                    helpmessage = false;
                }
                if( help == true ){
                    helpmessage = true;
                    help = false;
                }
                
            }
            break;

        case 'sticker':
            client.replyMessage(event.replyToken, [
                // {
                //     type: 'text',
                //     text: messageserch.get('message1') //実際に返信の言葉を入れる箇所
                // },
                {
                    type: 'text',
                    text: 'あ？' //実際に返信の言葉を入れる箇所
                }
            ]);

            // const puppeteer = require('puppeteer');
            // const iPhone = puppeteer.devices['iPhone X'];
            // const LOGINURL = 'https://t-po.tais.ac.jp/up/up/co/smartphone/login.jsp';

            break;

        default:
            Promise.resolve(null);
            break;
    };
}
exports.app = functions.https.onRequest(app);

// const newpush = (()=>{
//     const message = {
//         type: 'text',
//         text: 't-poに新しい通知が来たよ！！'
//     };
//     const push = (() => {
//         client.pushMessage('U75f48446e38cf44714b0f1941f9977e1', message)
//         .then(() => {
//         })
//         .catch((err) => {
//             (result) => res.json(result)
//         });
//     })
//     push();
// })
// setInterval(newpush,5000);