'use strict';

const line = require('@line/bot-sdk');
const functions = require('firebase-functions');
var admin = require("firebase-admin");
let db = admin.firestore();


const client = new line.Client(config);

const idref = db.collection('userids');

exports.updateid = functions.region('asia-northeast1').firestore.document('userids/updateid')
    .onUpdate((snap, context) => {
    const newValue = snap.after.data(); // 更新後のデータ
    const updateid = newValue.updateid;
    if( updateid[0] != '' ){
        return (async()=>{
            await updateid.map(async(lineid)=>{
                const aaa = await db.collection('users').doc(lineid).get();
                const message1 = await aaa.get('message1')
                const datacheck = await aaa.get('datalist1')
                const push = await(() => {
                    client.pushMessage(lineid, [
                        {
                            type: 'text',
                            text: message1+'\n\n\nhttps://t-po.tais.ac.jp/up/up/co/smartphone/login.jsp'
                        },
                        // {
                        //     type: 'text',
                        //     text: 'https://t-po.tais.ac.jp/up/up/co/smartphone/login.jsp'
                        // }
                    ])
                    .then(() => {
                    })
                    .catch((err) => {
                        (result) => res.json(result)
                    });
                });
                console.log('LINE送った'+lineid)
                await push();
                if( datacheck[0] == 'Error'){
                    console.log('まちがってる消します'+lineid)
                    await db.collection('users').doc(lineid).delete();
                }
                return
            });
            await idref.doc('updateid').set({
                updateid : []
            },{merge:true})
        })()
    };
    if( updateid[0] == '' ){
        return console.log('ぴ')
    }
});