#  **Electron**.js 사용해 보기

## 설치

``` 
git clone https://github.com/electron/electron-quick-start
cd electron-quick-start
npm install
```

## 사용법

* js파일을 만들어 원하는 코드를입력한다.

* <script src="주소"></script> 를 입력하여 js파일을 불러온다

## 에제

``` html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <!-- https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP -->
    <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'">
	<meta http-equiv="X-Content-Security-Policy" content="default-src 'self'; script-src 'self'">
	<link rel="stylesheet" href="index.css">
    <title>Hello World!</title>
  </head>
  <body>
    <div class="login">
      <h1>Webtoon Downlaoder</h1>
      <form method="post" id="post">
        <input placeholder="titleId" name="titleId" type="number" required id="title" >
        <input placeholder="startNo" name="startNo" type="number" required id="start">
        <input placeholder="endNo" name="endNo" type="number" required id="end">
        <input placeholder="name" name="name" type="text" required id="name">
        <button type="submit" class="btn btn-primary btn-large" id="btn" >Dowload</button>
      </form>
    </div>
  <script src="./funcition.js"></script>
  </body>
</html>

```

```javascript
const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');

var state = {
    titleId:null,
    startNo:null,
    endNo:null,
    name:''
};

const downloadImg = (path,name,url,no) => {
    request(
        {
            url:url,
            headers:{referer:url},
            encoding:null
        },function (err,response,body) {
            if(response.statusCode!==200) {
                alert("요류가 발생했습니다.\n인터넷/ID/Number/등을 확인해 주세요.");
            }
        fs.writeFile(path+"\\"+name+no+" 화 "+url.split("_IMAG01_")[1],body,err => {
            if(err) throw err;
        });
    });
}

const getImgUrls = (titleId,no,name) => {
    request(`https://comic.naver.com/webtoon/detail.nhn?titleId=${titleId}&no=${no}&weekday=tue`,function(err,response,body) {
        const $ = cheerio.load(body);
        for(let i=0;i< $('.wt_viewer img').length;i++)
            downloadImg("download", name,$('.wt_viewer img')[i].attribs.src,no); 
    }) 
}
const change = function(e) {
    state[e.target.name] = e.target.value;
}
document.getElementById('post').onsubmit=function(e) { 
    e.preventDefault();
    for(let i=state.startNo;i<=state.endNo;i++)
        getImgUrls(state.titleId,i,state.name); 
}
document.getElementById('title').onchange=change;
document.getElementById('start').onchange=change;
document.getElementById('end').onchange=change;
document.getElementById('name').onchange=change;
```

