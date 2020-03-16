# node-schedule

오늘은 node-schedule이라는 nodejs 모듈을 알게 되었다.

node-schedule을 사용한 이유는 서버가 켜져 있을 때 하루의 일정 시간이 되면 지정해놓은 콜백함수를 실행시키기 위함이었다.



- 사용법

  ![cron expressionì ëí ì´ë¯¸ì§ ê²ìê²°ê³¼](https://i.stack.imgur.com/A1Z5h.png)

~~~javascript
const schedule = require('node-schedule');

const j = schedule.scheduleJob('0 0 0 * * MON-FRI', function() {
   ... 
});
~~~

첫번째 인자로 cron expression을 문자열로 넣어준다. 두번째 인자는 일정 시간마다 실행할 콜백함수를 넣어준다.

위의 코드는 월요일에서 금요일 0시가 되면 콜백함수가 실행되는 코드이다.

~~~javascript
...
j.cancel();
~~~

node-schedule 실행을 취소하기 위해서는 위의 코드를 써주면 된다.

정말 유용하다!