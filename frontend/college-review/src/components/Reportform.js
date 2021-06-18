import React, { useState, useCallback } from 'react';
import Button from '@material-ui/core/Button';

const ContactForms = (props) => {
const [email, setEmail] = useState(""),
    [description, setDescription] = useState("");

const inputEmail = useCallback((event) => {
    setEmail(event.target.value);
});
const inputDescription = useCallback((event) => {
    setDescription(event.target.value);
});

const clickSendButton = () => {
    SendNotificationToSlack( JSON.stringify( props.array ), props.timestamp, email, description );
    setEmail("");
    setDescription("");
}

    return (
        <div className="contact-form" style={{margin:'0 0 15px 0'}}>
        <TextInput
            label={"メールアドレス(任意)"} multiline={false} rows={1}
            value={email} type={"email"} onChange={inputEmail}
        />
        <TextInput
            label={"通報内容"} multiline={true} rows={5}
            value={description} type={"text"} onChange={inputDescription}
        />
        <div className="contact-button-container">
            <Button
                onClick={clickSendButton}
                variant="contained"
                color="primary"
                autoFocus
            >
            送信する
            </Button>
        </div>
        </div>
    );
}

export default ContactForms;

import TextField from '@material-ui/core/TextField';
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
        />
    );
}

import fetch from 'node-fetch';
const SendNotificationToSlack = async( array, timestamp, email, description ) => {
    const message = "通報内容\n\n" + "array:\n" + array + "\n\ntime:\n" + timestamp +"\nEmail:\n" + email +"\ncontent: \n" + description + "\n-----以上------"
    const payload = {
        "blocks" : [
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text" : ":clipboard: review通報！！！！！ :clipboard:"
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
            alert("送信が完了致しました。");
        }).catch(()=>{
            alert("エラーが起きました、もう一度やり直してください。もしかしたらできないかもですごめん、、");
        })
}