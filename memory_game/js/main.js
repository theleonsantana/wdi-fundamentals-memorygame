// CARD ARRAY
const cards = ['queen', 'queen', 'king', 'king'];
const cardsInPlay = [];
const cardOne = cards[0];
const cardTwo = cards[1];

cardsInPlay.push(cardOne, cardTwo);

if (cardsInPlay.length === 2) {
  console.log('2');
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert('You found a match!');
  } else {
    alert('Sorry try again!');
  }
}
