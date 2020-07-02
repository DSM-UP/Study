# NodeJS express 미들웨어

```javascript
const app = require('express')();

app.use();    //
app.get();    // 
app.post();   //
app.delete(); //
app.patch();  //
app.put();    //   미들웨어

// EX
app.use("/",(req,res,next) => {
   console.log("첫번째 미들웨어");
    next(); // next호출시 다음 미들웨어로 넘어감
});

app.use("/",(req,res,next) => {
   console.log("두번째 미들웨어");
    next(); // next호출시 다음 미들웨어로 넘어감
});
```



