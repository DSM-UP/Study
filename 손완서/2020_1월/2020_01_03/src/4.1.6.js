let remaining = totalBet;
do {
  let bet = rand(1, remaining);
  let face = randFace();
  bets[face] = bets[face] + bet;
  remaining = remaining - bets;
} while (remaining > 0);
