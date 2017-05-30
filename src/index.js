const Telegraf = require('telegraf')
const open = require("open-uri");
var sys = require('sys')

var exec = require('child_process').exec;

// executes `pwd`

//const app = new Telegraf(process.env.BOT_TOKEN)
//console.log($BOT_TOKEN)
const app = new Telegraf('BOT')
app.command('start', ({ from, reply }) => {
  console.log('start', from)
  return reply('Welcome!')
})
app.command('ip', ({ from, reply }) => {
  console.log('start', from)
  exec("curl ipinfo.io/ip", function (error, stdout, stderr) {

  return reply(stdout);

});
})
app.hears('hi', (ctx) => ctx.reply('Hey there!'))
app.on('sticker', (ctx) => ctx.reply('👍'))

//app.on('message', (ctx) =>  ctx.message.text.substr(0, 10) == "magnet:?xt" ? open(ctx.message.text) : ctx.reply('Eso no es un magnet'))

app.command('torrent', (ctx) => {
  console.log(ctx.message)
})

app.startPolling()