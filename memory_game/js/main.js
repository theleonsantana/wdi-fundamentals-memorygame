// CARD OBJECT
const cards = [
  {
    rank: 'queen',
    suit: 'hearts',
    cardImage: 'images/queen-of-hearts.png',
  },
  {
    rank: 'queen',
    suit: 'diamonds',
    cardImage: 'images/queen-of-diamonds.png',
  },
  {
    rank: 'king',
    suit: 'hearts',
    cardImage: 'images/king-of-hearts.png',
  },
  {
    rank: 'king',
    suit: 'diamonds',
    cardImage: 'images/king-of-diamonds.png',
  },
];

/* 

- when the user enters all the cards are facing down, they are being shuffle.
- if the user clicks in one card, the card shows is rank,
- After the user clicks two cards , if there's a match then the user gets a point if not the cards hide again and the card get shuffle,
- If there is another player the user can reset the counter to start the game again. 

*/

const cardsInPlay = [];
let score = 0;
const scoreBoard = document.getElementById('score');
const message = document.getElementById('message');

//Shuffle the current card games
const shuffle = function() {
  for (let i = 0; i < cards.length - 1; i++) {
    let game = i + Math.floor(Math.random() * (cards.length - i));
    let tempGame = cards[game];
    cards[game] = cards[i];
    cards[i] = tempGame;
  }
  cards;
};

const checkForMatch = function() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    message.innerHTML = 'Match! Reset Game and keep playing!';
    score++;
    scoreBoard.innerHTML = score;
  } else {
    message.innerHTML = 'Sorry! Reset Game and try again.';
  }
  score;
};

const flipCard = function() {
  const cardId = this.getAttribute('data-id');
  const card = cards[cardId];
  this.setAttribute('src', cards[cardId].cardImage);
  this.setAttribute('class', 'front');
  cardsInPlay.push(card.rank);
  if (cardsInPlay.length === 2) {
    setTimeout(checkForMatch, 200);
  }
};

function createBoard() {
  for (let i = 0; i < cards.length; i++) {
    const cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }
}

const resetCards = function() {
  for (let i = cardsInPlay.length - 1; i > -1; i--) {
    const flippedCard = document.querySelectorAll('.front')[i];
    flippedCard.setAttribute('src', 'images/back.png');
    flippedCard.setAttribute('class', 'back');
    cardsInPlay.splice(i, 1);
  }
  shuffle();
};

document.getElementById('reset-game').addEventListener('click', resetCards);
createBoard();
