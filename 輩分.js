var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
var moment = require('moment');
var fucku = 1;
var fucklol,notice ;
var testtb = 0 ;
// Configure logger settings
//仿陣列--
var testtb2 = 0;

//仿陣列--
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
    logger.info("已連線-by_LED，時間:" +moment().format('LLLL'));
    logger.info("機器編號:");
    logger.info(bot.username + " - (" + bot.id + ")");
});
bot.on("message", function (user, userID, channelID, message, evt) {
	if(fucku == 1 ){	
		if(user == fucklol ){
			var fuckrandom = Math.floor(Math.random()*5)+1;//亂數產生1~100
			switch(fuckrandom){
				case 1:
				bot.sendMessage({
					to: channelID,
					message: fucklol + '閉嘴'//機器人回覆這一行字
				});
				break;
				case 2:
				bot.sendMessage({
					to: channelID,
					message: fucklol + '賣岔'//機器人回覆這一行字
				});
				break;
				case 3:
				bot.sendMessage({
					to: channelID,
					message: fucklol + '墊墊'//機器人回覆這一行字
				});
				break;
				case 4:
				bot.sendMessage({
					to: channelID,
					message: fucklol + '，喔'//機器人回覆這一行字
				});
				break;
			}
		}		
	}
	
	if (message.substring(0, 2) == '欸！') {
		var args = message.substring(2).split(' ');
		var cmd = args[0];
		//主要修改的部分
		var ran = Math.floor(Math.random()*100)+1;//亂數產生1~100
		switch(cmd) {
			case '開賭'://若輸入!dice時執行
                bot.sendMessage({
					to: channelID,
					message: user +' '+ ran + ' 點！'//機器人回覆這一行字	
                });
            break;
            case '測試':
                bot.sendMessage({
                    to: channelID,
                    message: 'ok' + moment().format('h:mm') + testtb2//機器人回覆這一行字
                    //message: ' 測試 '//機器人回覆這一行字
                });
            break;
            case '開噴':
				fucku = 1;
                bot.sendMessage({
                    to: channelID,
                    message:' ok,當前狀態 ' + fucku//機器人回覆這一行字
                    //message: ' 測試 '//機器人回覆這一行字
                });
            break;
            case '別噴':
				fucku = 0;
                bot.sendMessage({
                    to: channelID,
                    message:' ok,當前狀態 ' + fucku//機器人回覆這一行字
                    //message: ' 測試 '//機器人回覆這一行字
                });
            break;
            case '現在幾點':
				fucku = 0;
                bot.sendMessage({
                    to: channelID,
                    message:'現在' + moment().format('LLLL')//機器人回覆這一行字
                    //message: ' 測試 '//機器人回覆這一行字
                });
            break;
            case '記憶頻道':
				notice = channelID;
                bot.sendMessage({
                    to: channelID,
                    message:'OK' + channelID//機器人回覆這一行字
                });
            break;
            case '呼叫':
                bot.sendMessage({
                    to: notice,
                    message:'hi'//機器人回覆這一行字
                });
            break;
         }

     }
	 
	switch(moment().format('dddd')){
		case 'Monday':
		//nope
		break;
		case 'Tuesday':
			//nope
		break;
		case 'Wednesday':
				//nope
		break;
		case 'Thursday':
			//nope
		break;
		case 'Friday':
			//nope
		break;
		case 'Saturday':
			//nope
		break;
		case 'Sunday':
			if(moment().format('h:mm') == '8:48' && testtb2 == 0){
				testtb2 = 1;
				bot.sendMessage({
					to: notice,
					message:'測試課程ok' +testtb2//機器人回覆這一行字	
				});
			}
		break;
	}
	
	if (message.substring(0, 5) == '開噴lol') {
        var args = message.substring(7);//.split(' ');
        var cmd = args[0];
		fucklol = args;
		bot.sendMessage({
			to: channelID,
			message:args//機器人回覆這一行字
		});
	}
});

	