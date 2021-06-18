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
    sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range: 'シート1!A:B',
    }, (err, res) => {
        if (err) return console.log('The API returned an error: ' + err);

        // const rows = res.data.values;
        // if (rows.length) {
        //     console.log('Yes!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
        //     rows.map((row) => {
        //         console.log(row[0],row[1])
        //     });
        // }
    });

    // await sheets.spreadsheets.values.append({
    //     spreadsheetId: SPREADSHEET_ID,
    //     range: "シート2",
    //     valueInputOption: "USER_ENTERED",
    //     auth : auth,
    //     resource : {
    //         values : [["2019/12/4", "もも", "45"],["2019/12/4", "aaa", "45"]]
    //     }
    // })
    // console.log('!!!!!')
}