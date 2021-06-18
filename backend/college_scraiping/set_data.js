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

    const box = [
        '20_daigaku_haru_getu_/',
        '20_daigaku_haru_ka_/',
        '20_daigaku_haru_sui_/',
        '20_daigaku_haru_moku_/',
        '20_daigaku_haru_kin_/',
        '20_daigaku_haru_do_/'
    ];
    await Promise.all(
        await box.map(async(array,index)=>{
            await sheets.spreadsheets.values.get({
                spreadsheetId: SPREADSHEET_ID,
                range: array + '!A:C',
            }, async(err, res) => {
                if (err) return console.log('The API returned an error: ' + err);
                const rows = res.data.values;
                console.log(rows)
                // if (rows.length) {
                //     for (let i = 0; rows.length > i; i++) {
                //         let data = [rows[i][0], rows[i][1], rows[i][2]];
                //         all_data.push(data);
                //     }
                await setTimeout(()=>{
                    sheets.spreadsheets.values.append({
                        spreadsheetId: SPREADSHEET_ID,
                        range: '20_daigaku_haru_survey_/',
                        valueInputOption: "USER_ENTERED",
                        auth: auth,
                        resource: {
                            values: rows
                        }
                    });
                    // sheets.spreadsheets.values.update({
                    //     spreadsheetId: SPREADSHEET_ID,
                    //     range: '20_daigaku_haru_survey_/',
                    //     valueInputOption: "USER_ENTERED",
                    //     auth: auth,
                    //     resource: {
                    //         values: rows
                    //     }
                    // });
                },index*1000)
            });
        })
    )

    // // get
    // sheets.spreadsheets.values.get({
    //     spreadsheetId: SPREADSHEET_ID,
    //     range: '20_daigaku_haru_getu_/!B:C',
    // }, (err, res) => {
    //     if (err) return console.log('The API returned an error: ' + err);

    //     const rows = res.data.values;
    //     if (rows.length) {
    //         console.log('Yes!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
    //         rows.map((row) => {
    //             console.log(row[0],row[1])
    //         });
    //     }
    // });

    // await sheets.spreadsheets.values.update({
    //     spreadsheetId: SPREADSHEET_ID,
    //     range: array[5],
    //     valueInputOption: "USER_ENTERED",
    //     auth : auth,
    //     resource : {
    //         values : all_data
    //     }
    // })
}