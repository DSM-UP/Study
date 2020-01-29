const d = new Date(Date.UTC(2016, 4, 27)); // May 27, 2016 UTC

// Moment.js에 넘기는 배열은 자바스크립트의 Date 생성자에 넘기는 매개변수와 똑같고,
// 월은 0으로 시작합니다.
// toDate() 메서드는 Moment.js 객체를 자바스크립트 Date 객체로 변환합니다.
const d = moment.tz([2016, 3, 27, 9, 19], "America/Los_Angeles").toDate();
const s = moment.tz([2016, 3, 27, 9, 19], "Asia/Seoul").toDate();
