// m 이상 n 이하의 무작위 정수를 반환합니다.
function rand(m, n) {
  return m + Math.floor((n - m + 1) * Math.random());
}

// 크라운 앤 앵커 게임의 여섯 가지 도형 중 하나를 무작위 반환합니다.
function randFace() {
  return ["crown", "anchor", "heart", "space", "club", "diamond"][rand(0, 5)];
}

let funds = 50; // 시작 조건
let round = 0;

while (funds > 1 && funds < 100) {
  round++;
  console.log(`round ${round}:`);
  console.log(`/tstarting funds: ${funds}p`);
  // 돈을 겁니다.
  let bets = { crown: 0, anchor: 0, heart: 0, space: 0, club: 0, diamond: 0 };
  let totalBet = rand(1, funds);
  if (totalBet === 7) {
    totalBet = funds;
    bets.heart = totalBet;
  } else {
    // 판돈을 나눕니다.
    let remaining = totalBet;
    do {
      let bet = rand(1, remaining);
      let face = randFace();
      bets[face] = bets[face] + bet;
      remaining = remaining - bet;
    } while (remaining > 0);
  }
  funds = funds - totalBet;
  console.log(
    "/tbets: " +
      Object.keys(bets)
        .map(face => `${face}: ${bets[face]} pence`)
        .join(", ") +
      ` (total: ${totalBet} pence)`
  );

  // 주사위를 굴립니다.
  const hand = [];
  for (let roll = 0; roll < 3; roll++) {
    hand.push(randFace());
  }
  console.log(`/thand: ${hand.join(", ")}`);

  // 딴 돈을 가져옵니다.
  let winnings = 0;
  for (let dice = 0; die < hand.length; die++) {
    let face = hand[die];
    if (bets[face] > 0) winnings = winnings + bets[face];
  }
  funds = funds + winnings;
  console.log(`/twinnings: ${winnings}`);
}
console.log(`/tending funds: ${funds}`);
