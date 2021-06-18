@echo off

netsh wlan connect name="taisho"

start Microsoft-Edge:http://198.18.10.1/reg.php?ah_goal=index5.html&ah_login=true&url=E2B8F3578D88E9A53591BB4A9D91559BCD2511925520D2F59583C4C6533EC881EFA8EE55D2C4B2

timeout /t 4 /nobreak >nul

curl -F "username=papera" -F "password=G7mB3g84" "http://198.18.10.1/reg.php?ah_goal=index5.html&ah_login=true&url=E2B8F3578D88E9A53591BB4A9D91559BCD2511925520D2F59583C4C6533EC881EFA8EE55D2C4B2"

timeout /t 4 /nobreak >nul

start Microsoft-Edge:https://result-view.netlify.app/wifi_success