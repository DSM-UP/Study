# 오늘 공부

- 오늘 서버 개발을 하면서 에러 핸들러에 대해 알게 됐다. 

  ~~~javascript
  const express = require('express'); 
  const app = express();
  
  app.use(...);
  app.use(...);
  app.use((req, res, next) => {
      const err = new Error('Not Found');
      err.status = 404;
      next(err);
  });
  
  // 에러 핸들러
  app.use((err, req, res) => {
      res.status(...);
      res.render('error');
  });
  ~~~

  

 오늘 알아내기 전까지는 에러 핸들러를 저런식으로 만들었다. 그런데 오늘 서버 코드를 테스트 하다 보니까 무언가 잘못 되었다는 것을 알게 됐다. 위와 같이 에러 핸들러를 만들면 에러 핸들러로 인식을 안하게 된다. 알고 보니 에러 핸들러는 err, req, res 다음에 next도 써줘야 하는 것 같다. app.use((err, req, res, next)).
