const now = new Date();
now; // Fri Dec 16 2016 09:20:16 GMT+0900 (KST)

const halloween = new Date(2016, 9, 31); // 월은 0에서 시작합니다. 즉, 9는 10월입니다.
const halloweenParty = new Date(2016, 9, 31, 19, 0); // 19:00 = 7:00 pm

halloweenParty.getFullYear(); // 2016
halloweenParty.getMonth(); // 9
halloweenParty.getDate(); // 31
halloweenParty.getDay(); // 1 (월요일입니다. 0은 일요일입니다)
halloweenParty.getHours(); // 19
halloweenParty.getMinutes(); // 0
halloweenParty.getSeconds(); // 0
halloweenParty.getMilliseconds(); // 0
