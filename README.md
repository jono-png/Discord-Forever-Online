# Discord-Online-Forever
Keep ypou Discord profile online forever

1. Register on Render - https://render.com/
2. For this repo & run on Render
3. Get Token of your Discord:
  - Login to your Discord in the browser
  - Press: CTRL+SHITT+I or F12. Go to Network. Click some dialogue or some server
  - Find sciense. Go to Headers. In request headers find: authorization. Copy this token
4. Go to Render, secrets. make new secret. Key is token, and value is your token
5. Run the bot
6. Go to https://cron-job.org/, register. Click: Create cronjob
7. Monitor type is HTTP. Url is address you get on Render. Click create cronjob
8. Make sure the last session you was online
