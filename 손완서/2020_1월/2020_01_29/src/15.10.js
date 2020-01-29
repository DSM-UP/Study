const msDiff = d2 - d1; // 417740400000 ms
const daysDiff = msDiff / 1000 / 60 / 60 / 24; // 4834.96 days

const dates = [];

// 랜덤한 날짜를 몇 개 만듭니다.
const min = new Date(2017, 0, 1).valueOf();
const delta = new Date(2020, 0, 1).valueOf() - min;
for (let i = 0; i < 10; i++) dates.push(new Date(min + delta * Math.random()));

// dates 배열은 랜덤으로 만들었으므로 (아마) 뒤죽박죽일 겁니다.
// 다음과 같이 역순으로 정렬할 수 있습니다.
dates.sort((a, b) => b - a);
// 날짜순으로 정렬할 수도 있습니다.
dates.sort((a, b) => a - b);

let m = moment(); // 현재
m.add(3, "days"); // m은 이제 3일 뒤입니다.
m.subtract(2, "years"); // m은 이제 2년 전으로부터 3일이 지난 날짜입니다.

m = moment(); // 리셋
m.startOf("year"); // m은 이제 올해의 1월 1일입니다.
m.endOf("month"); // m은 이제 올해의 1월 31일입니다.

let m = moment()
  .add(10, "hours")
  .subtract(3, "days")
  .endOf("month");
// m 은 이제 3일 전으로부터 10시간 뒤인 달의 마지막 순간입니다.
