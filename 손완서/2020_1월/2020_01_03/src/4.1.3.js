while (funds > 1 && funds < 100) funds = funds + 2;

// 줄바꿈이 없습니다.
while (funds > 1 && funds < 100) funds = funds + 2;

// 줄바꿈 없이 문 하나를 블록 안에 썼습니다.
while (funds > 1 && funds < 100) {
  funds = funds + 2;
}

while (funds > 1 && funds < 100) funds = funds + 2;
funds = funds - 1;

while (funds > 1 && funds < 100) funds = funds + 2; // while 루프 바디

funds = funds - 1; // while 루프가 끝난 다음 실행됩니다.

// 이렇게 하지 마십시오.
if (funds > 1) {
  console.log("There's money left!");
  console.log("That means keep playing!");
} else console.log("I'm broke! Time to quit");

// 이렇게도 하지 마십시오.
if (funds > 1) console.log("There's money left! Keep playing!");
else {
  console.log("I'm broke out!");
  console.log("Time to quit!");
}
