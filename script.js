const messageEl= document.querySelector("#message-el");
const sumEl= document.querySelector("#sum-el");
const cardsEl= document.querySelector("#cards-el");

let firstCard= 11;
let secondCard= 10;

let sum = firstCard + secondCard;
let hasBlackjack = false;
let isAlive=true;
let message = "";


function startGame(){
    cardsEl.textContent= `Cards: ${firstCard} ${secondCard}`;
    sumEl.textContent= `Sum: ${sum}`;
    if (sum <=20){
        message = "Do you want a new card?";

    }else if(sum ===21){
        message= "You've got Blackjack!"

        hasBlackjack= true;
    }else{
        message= "You're out of game!";

        isAlive=false;
    }
    messageEl.textContent= message;
}

function newCard(){
    console.log("drawing new card");
}