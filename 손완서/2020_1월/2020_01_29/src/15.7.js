const moment = require("moment");

const d = new Date(Date.UTC(1930, 4, 10));

// 다음 결과는 로스엔젤리스에 사는 사람 기준입니다.

d.toLocaleDateString(); // "5/9/1930"
d.toLocalFormat(); // "5/9/1930 4:00:00 PM"
d.toLocaleTimeString(); // "4:00:00 PM"
d.toTimeString(); // "17:00:00 GMT-0700 (Pacific Daylight Time)"
d.toUTCString(); // "Sat, 10 May 1930, 00:00:00 GMT"

moment(d).format("YYYY-MM-DD"); // "1930-05-09"
moment(d).format("YYYY-MM-DD HH:mm"); // "1930-05-09 17:00"
moment(d).format("YYYY-MM-DD HH:mm Z"); // "1930-05-09 17:00 -07:00"
moment(d).format("YYYY-MM-DD HH:mm [UTC]Z"); // "1930-05-09 17:00 UTC-07:00"
moment(d).format("YYYY년 M월 D일 HH:mm"); // "1930년 5월 10일 09:00"

moment(d).format("dddd, MMMM [the] Do, YYYY"); // "Friday, May the 9th 1930"

moment(d).format("h:mm a"); // "5:00 pm"
