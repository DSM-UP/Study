# Discord.js 를 사용해보자!

## 설치

* npm install discord.js 

## 사용하기

``` javascript
const Discord = require('discord.js'); // 디스코드.js 를 불러옴
const Client = new Discord.Client(); // 디스코드 클라이언트 객체를 생성

Client.on('ready' => { // 클라이언트의 ready 라는 이벤트
   	console.log("실행"); // 봇이 켜질시 실행을 출력
});

Client.on('msg' => { //클라이언트의 Message 이벤트
    if(msg.content === "hello") // Message가 hello이면
        msg.reply("World"); // World를 디스코드창에 출력
})

Client.login(토큰) // 봇의 로그인 없을시 봇이 동작하지 않음

```

## 오늘만든 롤 전적검색 봇 

``` javascript
const Discord = require('discord.js');
const client = new Discord.Client();
const axios = require('axios');
const cheerio = require('cheerio');

const getHtml = async (name) => {
    try {
        console.log(`https://www.op.gg/summoner/userName=${name}`);
      return await axios.get(`https://www.op.gg/summoner/userName=${name}`);
    } catch (error) {
      console.error(error);
    }
  };

client.on('ready', () => {
    console.log("실행!");
});

client.on('message',msg => {
    if(msg.content.indexOf("/검색")>-1) {
        msg.reply(`${msg.content.split('/검색 ')[1]} 님의 전적을 검색하셨습니다.`);
        getHtml(msg.content.split('/검색 ')[1]).then(html => {
            const $ = cheerio.load(html.data);
            const $value = $(".GameResult").text();
            msg.reply($value);
            var win = ($value.match(/Victory/g)).length;
            var lose = ($value.match(/Defeat/g)).length;

            msg.reply(`${msg.content.split(' ')[1]}님의 전적은 20전 ${win}승 ${lose}패 입니다.(${20-win-lose} 다시하기)`);
        }); 
        
    }
});

client.login(토큰);
```

