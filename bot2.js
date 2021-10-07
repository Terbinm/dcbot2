var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
var moment = require('moment');
moment.locale('zh-tw'); 

var fucku = 1;
var fucklol,notice ;
var testtb = 0 ;
var newtime = 0;
// Configure logger settings
//仿陣列--命名原則:星期第N節
var mon5 =0,tue3 =0,tueA =0,tue5 =0,tue8 =0,wed2 =0,thu2 =0,thuA =0,thu5 =0,fri5 =0;
var mon51 =0,tue31 =0,tueA1 =0,tue51 =0,tue81 =0,wed21 =0,thu21 =0,thuA1 =0,thu51 =0,fri51 =0;
var testclass = 0;
var locktestclass = 235800;
//仿陣列--命名規則:lock+星期第N節
var lockmon5 = 47400 ;
var locktue3 = 121800 ;
var locktueA = 129000 ;
var locktue5 = 134700 ;
var locktue8 = 144600 ;
var lockwed2 = 204600 ;
var lockthu2 = 291000 ;
var lockthuA = 301800 ;
var lockthu5 = 306600 ;
var lockfri5 = 393000 ;
//-----命名規則:lock+星期第N節+1==上+900
var lockmon51 = 48300 ;
var locktue31 = 122700 ;
var locktueA1 = 129900 ;
var locktue51 = 135600 ;
var locktue81 = 145500 ;
var lockwed21 = 205500 ;
var lockthu21 = 291900 ;
var lockthuA1 = 302700 ;
var lockthu51 = 307500 ;
var lockfri51 = 393900 ;
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
    logger.info("請務必記得初始化!!!，機器編號:");
    logger.info(bot.username + " - (" + bot.id + ")");
});
bot.on("message", function (user, userID, channelID, message, evt) {
	
	newtime = (Number((moment().format('d')-1)*86400)+Number(moment().format('HH')*3600)+Number(moment().format('mm')*60)+Number(moment().format('ss')));
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
                    message: testclass +'/'+testtb+'/'+(locktue3-newtime)//機器人回覆這一行字
                    //message: ' 測試 '//機器人回覆這一行字
                });
				setTimeout(function(){bot.sendMessage({to: notice,message:' 管理學13:30將在E216教室上課!! \n線上課程連結 https://meet.google.com/ovq-teyy-fit '})},(10000));
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
            case '自檢系統':
                bot.sendMessage({
                    to: channelID,
                    message:'ok' + moment().format('LLLL')//機器人回覆這一行字
                    //message: ' 測試 '//機器人回覆這一行字
                });
				setTimeout(function(){bot.sendMessage({to: channelID,message:'圖片庫連線...\n ok'})},(10000));
				setTimeout(function(){bot.sendMessage({to: channelID,message:'資料紀錄系統...\n false'})},(11000));
				setTimeout(function(){bot.sendMessage({to: channelID,message:'transfromAI...\n false'})},(12000));
				setTimeout(function(){bot.sendMessage({to: channelID,message:'欸！指令系統...\n ok'})},(13000));
				setTimeout(function(){bot.sendMessage({to: channelID,message:'ok,LED語音系統...\n false'})},(14000));
				setTimeout(function(){bot.sendMessage({to: channelID,message:'伺服器時間...\n' + moment().format('LLLL') +'\n ok'})},(15000));
				setTimeout(function(){bot.sendMessage({to: channelID,message:'上課通知...\n ok'})},(17000));
				setTimeout(function(){bot.sendMessage({to: channelID,message:'googlemeet紀錄器...\n false'})},(18000));
				setTimeout(function(){bot.sendMessage({to: channelID,message:'校務系統通知...\n false'})},(19000));
				setTimeout(function(){bot.sendMessage({to: channelID,message:'地震預報系統...\n ok'})},(20000));
            break;
            case '記憶頻道':
				notice = channelID;
                bot.sendMessage({
                    to: channelID,
                    message:'OK' ///////////////////////////////+ channelID//機器人回覆這一行字
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
	 
	if (message.substring(0, 5) == '開噴lol') {
        var args = message.substring(7);//.split(' ');
        var cmd = args[0];
		fucklol = args;
		bot.sendMessage({
			to: channelID,
			message:args//機器人回覆這一行字
		});
	}
	if((lockmon5-newtime) > 10 && mon5 == 0){
		mon5 = 1;
		//testtb = lockmon5-newtime;
		setTimeout(function(){
			bot.sendMessage({to: notice,message:' 管理學13:30將在E216教室上課!! 線上課程連結 https://meet.google.com/ovq-teyy-fit '})
			mon5 = 0;
		},(lockmon5-newtime)*1000);
	}
	if((locktue3-newtime) > 10 && tue3 == 0){
		tue3 = 1;
		//testtb = locktue3-newtime;
		setTimeout(function(){
			bot.sendMessage({to: notice,message:' 體育10:10將在A藍上課!! '})
			tue3 = 0;
		},(locktue3-newtime)*1000);
	}
	if((locktestclass-newtime) > 10 && testclass == 0){
		testclass = 1;
		testtb = locktestclass-newtime;
		setTimeout(function(){
			bot.sendMessage({to: notice,message:' 測試 '})
			testclass = 0;
		},(locktestclass-newtime)*1000);
	}
	if((locktueA - newtime) > 10 && tueA == 0){
		tueA = 1;
		setTimeout(function(){bot.sendMessage({to: notice,message:' 服務教育 12:10 將在 掃地的地方 上課'})},(locktueA-newtime)*1000);
	}else{
		tueA = 0;
	}
	if((locktue5 - newtime) > 10 && tue5 == 0){
		tue5 = 1;
		setTimeout(function(){bot.sendMessage({to: notice,message:' 會計學 13:30 將在 E216教室 上課!!'})},(locktue5-newtime)*1000);
	}else{
		tue5 = 0;
	}

	if((locktue8 - newtime) > 10 && tue8 == 0){
		tue8 = 1;
		setTimeout(function(){bot.sendMessage({to: notice,message:' 實用應用文 16:30 將在 E213教室 上課!!'})},(locktue8-newtime)*1000);
	}else{
		tue8 = 0;
	}

	if((lockwed2 - newtime) > 10 && wed2 == 0){
		wed2 = 1;
		setTimeout(function(){bot.sendMessage({to: notice,message:' 程式設計 9:10 將在 C220教室 上課!!'})},(lockwed2-newtime)*1000);
	}else{
		wed2 = 0;
	}

	if((lockthu2 - newtime) > 10 && thu2 == 0){
		thu2 = 1;
		setTimeout(function(){bot.sendMessage({to: notice,message:' 微積分 9:10 將在 E216教室 上課!!'})},(lockthu2-newtime)*1000);
	}else{
		thu2 = 0;
	}

	if((lockthuA - newtime) > 10 && thuA == 0){
		thuA = 1;
		setTimeout(function(){bot.sendMessage({to: notice,message:' 服務教育 12:10 將在 掃地的地方 上課'})},(lockthuA-newtime)*1000);
	}else{
		thuA = 0;
	}

	if((lockthu5 - newtime) > 10 && thu5 == 0){
		thu5 = 1;
		setTimeout(function(){bot.sendMessage({to: notice,message:' 計算機概論 13:30 將在 C220教室 上課'})},(lockthu5-newtime)*1000);
	}else{
		thu5 = 0;
	}

	if((lockfri5 - newtime) > 10 && fri5 == 0){
		fri5 = 1;
		setTimeout(function(){bot.sendMessage({to: notice,message:' 經濟學 13:30 將在 E213教室 上課'})},(lockfri5-newtime)*1000);
	}else{
		fri5 = 0;
	}if((lockmon51 - newtime) > 10 && mon51 == 0){
		mon51 = 1;
		setTimeout(function(){bot.sendMessage({to: notice,message:' 管理學 13:30 將在 E216教室 上課!! '})},(lockmon51-newtime)*1000);
	}else{
		mon51 = 0;
	}

	if((locktue31 - newtime) > 10 && tue31 == 0){
		tue31 = 1;
		setTimeout(function(){bot.sendMessage({to: notice,message:' 體育 10:10 將在 A藍 上課!! '})},(locktue31-newtime)*1000);
	}else{
		tue31 = 0;
	}

	if((locktueA1 - newtime) > 10 && tueA1 == 0){
		tueA1 = 1;
		setTimeout(function(){bot.sendMessage({to: notice,message:' 服務教育 12:10 將在 掃地的地方 上課'})},(locktueA1-newtime)*1000);
	}else{
		tueA1 = 0;
	}

	if((locktue51 - newtime) > 10 && tue51 == 0){
		tue51 = 1;
		setTimeout(function(){bot.sendMessage({to: notice,message:' 會計學 13:30 將在 E216教室 上課!!'})},(locktue51-newtime)*1000);
	}else{
		tue51 = 0;
	}

	if((locktue81 - newtime) > 10 && tue81 == 0){
		tue81 = 1;
		setTimeout(function(){bot.sendMessage({to: notice,message:' 實用應用文 16:30 將在 E213教室 上課!!完成'})},(locktue81-newtime)*1000);
	}else{
		tue81 = 0;
	}

	if((lockwed21 - newtime) > 10 && wed21 == 0){
		wed21 = 1;
		setTimeout(function(){bot.sendMessage({to: notice,message:' 程式設計 9:10 將在 C220教室 上課!!'})},(lockwed21-newtime)*1000);
	}else{
		wed21 = 0;
	}

	if((lockthu21 - newtime) > 10 && thu21 == 0){
		thu21 = 1;
		setTimeout(function(){bot.sendMessage({to: notice,message:' 微積分 9:10 將在 E216教室 上課!!'})},(lockthu21-newtime)*1000);
	}else{
		thu21 = 0;
	}

	if((lockthuA1 - newtime) > 10 && thuA1 == 0){
		thuA1 = 1;
		setTimeout(function(){bot.sendMessage({to: notice,message:' 服務教育 12:10 將在 掃地的地方 上課'})},(lockthuA1-newtime)*1000);
	}else{
		thuA1 = 0;
	}

	if((lockthu51 - newtime) > 10 && thu51 == 0){
		thu51 = 1;
		setTimeout(function(){bot.sendMessage({to: notice,message:' 計算機概論 13:30 將在 C220教室 上課'})},(lockthu51-newtime)*1000);
	}else{
		thu51 = 0;
	}

	if((lockfri51 - newtime) > 10 && fri51 == 0){
		fri51 = 1;
		setTimeout(function(){bot.sendMessage({to: notice,message:' 經濟學 13:30 將在 E213教室 上課'})},(lockfri51-newtime)*1000);
	}else{
		fri51 = 0;
	}
	
	if((locktestclass-newtime) > 10 && testclass == 0){
		testclass = 1;
		testtb = locktestclass-newtime;
		setTimeout(function(){
			bot.sendMessage({to: notice,message:' 測試 '})
			testclass = 0;
		},(locktestclass-newtime)*1000);
	}
	//if((lock*** - newtime) > 10 && *** == 0){
	//	*** = 1;
	//	setTimeout(function(){bot.sendMessage({to: notice,message:' 管理學13:30將在E216教室上課!! 線上課程連結 https://meet.google.com/ovq-teyy-fit '})},(lock***-newtime)*1000);
	//}else{
	//	*** = 0;
	//}
});

	