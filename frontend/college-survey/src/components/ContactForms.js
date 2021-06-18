import React, { useState, useCallback } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const ContactForms = (props) => {
const [name, setName] = useState(""),
    [email, setEmail] = useState(""),
    [description, setDescription] = useState("");

const inputName = useCallback((event) => {
    setName(event.target.value);
});
const inputEmail = useCallback((event) => {
    setEmail(event.target.value);
});
const inputDescription = useCallback((event) => {
    setDescription(event.target.value);
});

  // 追加
const clickSendButton = () => {
    if( description != "" ) {
        SendNotificationToSlack(props.timestamp,name, email, description);
        // 入力フォームを初期化
        setName("");
        setEmail("");
        setDescription("");
    }
}

    return (
        <div className="contact-form">
        <iframe name="hidden_iframe" id="hidden_iframe" style={{display:'none'}} onLoad=""></iframe>
        <form 
            action="https://docs.google.com/forms/u/1/d/e/1FAIpQLSf51m6of2XWN7jcMD4iuxKeXmRBDZ7lnsfTaiys4OhfVaQcPQ/formResponse"
            method="post" 
            target="hidden_iframe"
            onSubmit={()=>{setTimeout(()=>{clickSendButton()},500);}} 
        >
            <TextField
                value="survey" type={"text"}
                name="entry.1539071974"
                style={{display:"none"}}
            />
            <TextInput
                label={"ニックネーム(任意)"} multiline={false} rows={1}
                value={name} type={"text"} onChange={inputName}
                name="entry.915819759"
            />
            <TextInput
                label={"メールアドレス(連絡用)(任意)"} multiline={false} rows={1}
                value={email} type={"email"} onChange={inputEmail}
                name="entry.824540805"
            />
            <TextInput
                label={"お問い合わせ内容"} multiline={true} rows={5}
                value={description} type={"text"} onChange={inputDescription}
                name="entry.154989002"
            />
            <div className="contact-button-container">
                {/* 追加 */}
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    autoFocus
                >
                送信する
                </Button>
            </div>
        </form>
        </div>
    );
}

export default ContactForms;

const TextInput = props => {
    const { label, multiline, rows, value, type, onChange } = props;

        return (
        <TextField
            fullWidth={true}
            label={label}
            margin={"dense"}
            multiline={multiline}
            rows={rows}
            value={value}
            type={type}
            onChange={onChange}
            name={props.name}
        />
    );
}

import fetch from 'node-fetch';
const SendNotificationToSlack = async(timestamp,name, email, description) => {
    const message = "お問い合わせ\n\ntime:\n " + timestamp +"\nname:\n "+ name +"\nEmail:\n " + email +"\ncontent: \n " + description + "\n-----以上------"
    const payload = await{
        "blocks" : [
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text" : ":clipboard: survey問い合わせ！！！！！ :clipboard:"
                }
            }
        ],
        "attachments" : [
            {
                "blocks" : [
                    {
                        "type": "section",
                        "text": {
                            "type": "mrkdwn",
                            "text": "```"+ "\n" + message + "\n" + "```"
                        }
                    }
                ]
            }
        ]
    }

    const url = 'https://hooks.slack.com/services/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';
    await fetch(url, {
        method: 'POST',
        body: JSON.stringify(payload)
        }).then(() => {
            alert("お問い合わせの送信が完了致しました。");
        }).catch(()=>{
            alert("エラーが起きました、もう一度やり直してください。もしかしたらできないかもですごめん、、");
        })
}