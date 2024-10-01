const messageEl = document.querySelector("#message-el");
const sumEl = document.querySelector("#sum-el");
const cardsEl = document.querySelector("#cards-el");

let player= {
    name:"Vineet",
    chips: 145, 
}


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips;

let cards = [];

let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = "";


function getRandomCard() {
  let randomCard = Math.floor(Math.random() * 13) + 1;
  if (randomCard === 1) {
    return 11;
  } else if (randomCard > 10) {
    return 10;
  } else {
    return randomCard;
  }
}

function startGame() {
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  isAlive = true;
  renderGame();
}

function renderGame() {
  cardsEl.textContent = `Cards: `;
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = `Sum: ${sum}`;
  if (sum <= 20) {
    message = "Do you want a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";

    hasBlackjack = true;
  } else {
    message = "You're out of game!";

    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive && !hasBlackjack) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}



// TODO 
// -> when the game ends , display a restart button and make sure the screen turns gray
// -> display actual cards according to the numbers 