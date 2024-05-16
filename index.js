const Eris = require("eris");
const keep_alive = require('./keep_alive.js')

const bot = new Eris("YOUR_BOT_TOKEN_HERE");

bot.on("error", (err) => {
  console.error(err);
});

bot.connect();
