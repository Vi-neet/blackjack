let firstCard= 11;
let secondCard= 9;

let sum = firstCard + secondCard;
let hasBlackjack = false;
let isAlive=true;
let message = "";

if (sum <=20){
    message = "Do you want a new card? 🙂";
}else if(sum ===21){
    message= "Blackjack! 🥳"
    hasBlackjack= true;
}else{
    message= "You're out of game! 😭";
    isAlive=false;
}
console.log(message);
