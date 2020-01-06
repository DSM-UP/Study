const hand = [randFace(), randFace(), randFace()];

for (let face of hand) console.log(`You rolled...${face}!`);

for (let i = 0; i < hand.length; i++) console.log(`Roll ${i + 1}: ${hand[i]}`);
