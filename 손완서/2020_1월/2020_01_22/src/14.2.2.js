function countdown() {
  let i; // i를 for 루프 밖에서 선언했습니다.
  console.log("Countdown:");
  for (i = 5; i >= 0; i--) {
    setTimeout(function() {
      console.log(i === 0 ? "GO!" : i);
    }, (5 - i) * 1000);
  }
}
countdown();

function countdown() {
  console.log("Countdown:");
  for (let i = 5; i >= 0; i--) {
    // 이제 i는 블록 스코프 변수입니다.
    setTimeout(function() {
      console.log(i === 0 ? "GO!" : i);
    }, (5 - i) * 1000);
  }
}
countdown();
