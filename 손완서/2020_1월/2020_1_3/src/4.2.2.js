if (new Date().getDay() === 3) {
  // new Date().getDay()는 현재 요일에 해당하는
  totalBet = 1; // 숫자를 반환합니다. 0은 일요일입니다.
} else if (funds === 7) {
  totalBet = funds;
} else {
  console.log("No superstition here!");
}

if (new Date().getDay() === 3) {
  totalBet = 1;
} else {
  if (funds === 7) {
    totalBet = funds;
  } else {
    console.log("No superstition here!");
  }
}
