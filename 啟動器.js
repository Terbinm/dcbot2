var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
var moment = require('moment');
moment.locale('zh-tw'); 
var channelIDget = 0;
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = "debug";
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on("ready", function (evt) {
    logger.info("Connected");
    logger.info("Logged in as: ");
    logger.info(bot.username + " - (" + bot.id + ")");
});
bot.on("message", function (user, userID, channelID, message, evt) {
if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
		
        switch(cmd) {
            case 'onlock'://若輸入!dice時執行
			channelIDget = channelID;
                bot.sendMessage({
                    to: channelID,
                    message:' 啟動刷屏 ' + channelIDget //機器人回覆這一行字
                });
            break;
            case 'ontest'://若輸入!dice時執行
                bot.sendMessage({
                    to: channelID,
                    message:' 測試' + moment().format('ss') //機器人回覆這一行字
                });
            break;
            case 'ontest1'://若輸入!dice時執行
				setTimeout(function(){/*YourCode*/},1000);
                bot.sendMessage({
                    to: channelIDget,
                    message:' 測試1' //機器人回覆這一行字
                });
				setTimeout(function(){bot.sendMessage({to: channelIDget,message:' 測試1'})},10000);
                //bot.sendMessage({to: channelIDget,message:' 測試1'});
            break;
         }

     }
});