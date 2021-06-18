'use strict';

const puppeteer = require('puppeteer');

const scraping_dataset = [                                        //大学 /年度 /学期 /曜日 /時限
    ['1','2020','1','1','|all target|','20_daigaku_haru_getu_/'], //大学/2020/春学期/月曜日/指定なし
    ['1','2020','1','2','|all target|','20_daigaku_haru_ka_/'],   //大学/2020/春学期/火曜日/指定なし
    ['1','2020','1','3','|all target|','20_daigaku_haru_sui_/'],  //大学/2020/春学期/水曜日/指定なし
    ['1','2020','1','4','|all target|','20_daigaku_haru_moku_/'], //大学/2020/春学期/木曜日/指定なし
    ['1','2020','1','5','|all target|','20_daigaku_haru_kin_/'],  //大学/2020/春学期/金曜日/指定なし
    ['1','2020','1','6','|all target|','20_daigaku_haru_do_/'],   //大学/2020/春学期/土曜日/指定なし
];
// gakubu_daigaku  = //1.大学   2.大学院
// *nenndo         = //年入力
// -gakki          = //1.春学期 2.秋学期
// -youbi          = //1.月 2.火 3.水 4.木 5.金 6.土 7.日
// jikann          = //1.1時限 2.2時限 ... 7.7時限
// 選択無し = '|all target|'

(async()=>{
let all_counter = [];
let timer_start = new Date().getTime();
let flg_timer_stop = false;
let time = 0;
const timer = setInterval(()=>{console.log('     '+time+':'+scraping_dataset.length+':'+all_counter.length);time++;if(flg_timer_stop) clearInterval(timer);},1000);

const go = async(array,index) => {
    //must be string!!!!
    const gakubu_daigaku = array[0];
    const nenndo         = array[1];
    const gakki          = array[2];
    const youbi          = array[3];
    const jikann         = array[4];

    let all_data = [];

    (async()=>{
        console.log('scraping start!:'+index)
        const browser = await puppeteer.launch({
            headless:true,//falseが見えるよ
            // slowMo:200,
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
                '--disable-infobars',
            ]
        });
        let page = await browser.newPage();
        
            await page.goto('https://t-po.tais.ac.jp/up/faces/login/Com00504A.jsp',{waitUntil: 'networkidle2'});
            await page.click('.logout');
            await page.waitFor(5000);
            await page.waitFor(5000*index);
            await page.click('input[name="form1:guest"]');
            await page.waitFor(5000);
            await page.evaluate(() => {
                clickMenuItem(1,0);
            });
            await page.waitFor(5000);
            await page.select('select[name="form1:htmllKanriBsyoName"]', gakubu_daigaku);
            await page.type(".inputText4", nenndo);
            await page.select('select[name="form1:htmlGakkiNo"]', gakki);
            await page.select('select[name="form1:htmlYobi"]', youbi);
            await page.select('select[name="form1:htmlJigen"]', jikann);
            await page.click('input[name="form1:search"]');
            await page.waitFor(5000);
        
            const template_data = await page.evaluate(() => { //検索の内容と件数を表す1度のみ
                let column_data_set = [] //columnデータを配列にするため

                const column_data = document.querySelectorAll('.headerClass .outputText');
                    column_data.forEach( (array) =>{
                        column_data_set.push(array.textContent)
                    })
                const search_content = document.querySelector('.kensakuJoken .outputText');
                const content_num = document.querySelector('.panelBox .outputText');

                const now_date = new Date();
                    const year = now_date.getFullYear();
                    const month = now_date.getMonth()+1;
                    const day = now_date.getDay()-1;
                    const hours = now_date.getHours();
                const now_date_set = year+':'+month+':'+day+':'+hours
                column_data_set.push(search_content.textContent,content_num.textContent,now_date_set)
                return column_data_set
            });
        
            let flg_none_lastpage = true;
            let check = 0;
            while( flg_none_lastpage ){
                await page.waitFor(5000);
                const flg_lastpage = await page.evaluate(() => { //現在ページ表示が最後のページというSTRONG表記になったら停止
                    const last_tag = document.querySelector('.pagerWeb')
                    return last_tag.lastElementChild.tagName == 'STRONG'
                })
                if( flg_lastpage == true ){
                    flg_none_lastpage = false;
                }
                if( true ){
                    check++
                    if( check > 100 ){ //最悪100回以上でループは抜ける
                        flg_none_lastpage = false;
                    }
                }
                const content_data = await page.evaluate(() => {
                    let content = []
                    let one_set = []
                    const classes = document.querySelectorAll('.rowClass1 .outputText');
                    classes.forEach( (array,index) =>{
                        one_set.push(array.textContent)
                        if( (index+1) % 7 == 0 ){
                            one_set.splice(1, 1);
                            content.push(one_set) //7個で一行だから配列で1セットにしておわり
                            one_set = []
                        }
                    })
                    return content
                });
                await page.waitFor(5000);
                await content_data.map((array)=>{
                    all_data.push(array)
                })
                await page.click('input[name="form1:htmlKekkatable:deluxe1__pagerNext"]');
            }
            await console.log('scraping.complete...-------------------');
            all_data.unshift(template_data); //templateとdataを足し合わせる
        await page.close();
        await browser.close();


        const fs = require('fs');
        const readline = require('readline');
        const {google} = require('googleapis');
        const SCOPES = [
            'https://www.googleapis.com/auth/spreadsheets',
            'https://www.googleapis.com/auth/drive',
            'https://www.googleapis.com/auth/drive.file'
        ];
        const TOKEN_PATH = 'token.json';
        fs.readFile('credentials.json', (err, content) => {
            if (err) return console.log('Error loading client secret file:', err);
            authorize(JSON.parse(content), listMajors);
        });
        function authorize(credentials, callback) {
            const {client_secret, client_id, redirect_uris} = credentials.installed;
            const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);
            fs.readFile(TOKEN_PATH, (err, token) => {
                if (err) return getNewToken(oAuth2Client, callback);
                oAuth2Client.setCredentials(JSON.parse(token));
                callback(oAuth2Client);
            });
        }
        function getNewToken(oAuth2Client, callback) {
            const authUrl = oAuth2Client.generateAuthUrl({
                access_type: 'offline',
                scope: SCOPES,
            });
            console.log('Authorize this app by visiting this url:', authUrl);
            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout,
            });
            rl.question('Enter the code from that page here: ', (code) => {
                rl.close();
                oAuth2Client.getToken(code, (err, token) => {
                    if (err) return console.error('Error while trying to retrieve access token', err);
                    oAuth2Client.setCredentials(token);
                    fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
                        if (err) return console.error(err);
                        console.log('Token stored to', TOKEN_PATH);
                    });
                    callback(oAuth2Client);
                });
            });
        }
        
        
        
        const SPREADSHEET_ID = '1Px7eYDp3wEeaSiAZ1fReK8du9wXVWoE22Q698LcGXeo';
        
        const listMajors = async(auth) => {
            const sheets = google.sheets({version: 'v4', auth});
        
            //get
            // sheets.spreadsheets.values.get({
            //     spreadsheetId: SPREADSHEET_ID,
            //     range: 'シート1!A:B',
            // }, (err, res) => {
            //     if (err) return console.log('The API returned an error: ' + err);
        
            //     // const rows = res.data.values;
            //     // if (rows.length) {
            //     //     console.log('Yes!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
            //     //     rows.map((row) => {
            //     //         console.log(row[0],row[1])
            //     //     });
            //     // }
            // });
        
            await sheets.spreadsheets.values.update({
                spreadsheetId: SPREADSHEET_ID,
                range: array[5],
                valueInputOption: "USER_ENTERED",
                auth : auth,
                resource : {
                    values : all_data
                }
            })
            console.log('-------------------dataset.complete...')
            let timer_stop = new Date().getTime() - timer_start;
            console.log('実行時間：' + timer_stop/1000 + 'ms');
            all_counter.push(index)
            if( scraping_dataset.length == all_counter.length ){
                flg_timer_stop = true
                sendData('scraping-complate!!!')
            }
            // if( scraping_dataset.length-1 == index ){flg_timer_stop = true;}
            // console.log(template_data)
            // console.log(all_data)
        }
    })()
}

const sendData = (message) => {
    const request = require('request');
    const options = {
        uri: 'https://notify-api.line.me/api/notify',
        headers: {
        'Authorization': `Bearer MBFopCNQwKyialPIRdEtPKIzoJXMVBUnhG36YRFnzlQ`
        },
        form: {
            message
        }
    };
    request.post(options, (error, response, body) => {
        // if (error) {
        //     console.error(error);
        //     return;
        // }
        // console.log(body);
    });
}

await (async()=>{
    await Promise.all(
        scraping_dataset.map( (array,index) => go(array,index))
    );
})()

})()