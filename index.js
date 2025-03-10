// 1. Wrapping gifts with a for loop
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts);  // This will log the messages for each gift.

// 2. Creating thank you cards with a for loop
function writeCards(names, event) {
  const thankYouCards = [];
  
  for (let i = 0; i < names.length; i++) {
    thankYouCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  
  return thankYouCards;
}

console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));

// 3. Countdown function with a while loop
function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number--;  // Decrement the number by 1 each time
  }
}

countDown(10);  // This will log numbers from 10 down to 0.
