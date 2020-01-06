let winnings = 0;
for (let die = 0; die < hand.length; die++) {
  let face = hand[die];
  if (bets[face] > 0) winnings = winnings + bets[face];
}
funds = funds + winnings;
