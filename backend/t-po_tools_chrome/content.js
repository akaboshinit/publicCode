
const usename  = '';
const password = '';


const tool = (() => {
    // window.alert('アプリ開いたね！');

    //初期ボタン画面
    if( document.getElementById('form1:logout') ){
        const logout_button = document.getElementById('form1:logout')
        logout_button.click()
    }

    //ログイン画面
    if( document.getElementById('form1:login') ){
        const usename_input = document.getElementById('form1:htmlUserId')
        const password_input = document.getElementById('form1:htmlPassword')
        const login_button = document.getElementById('form1:login')
        setTimeout(async()=>{
            usename_input.value = usename
            password_input.value = password
            await login_button.click()
        },100)
    }

    //ログイン後メニュー画面
    if( document.getElementById('header') ){
        setInterval(() => {
            window.alert('このページを開いてから10分以上経過しました。\n記入した内容が失われるかもしれません。');
        }, 600000);
    }
})();


// https://t-po.tais.ac.jp/up/faces/login/Com00504A.jsp