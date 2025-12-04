let firstCard = 10;
let secondCard = 11  ;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");



function startGame() {

    sumEl.textContent = "Sum: " + sum;
    
    if (sum <= 20) {  //it will provide the next round
        message = "Do you want to draw a new card?";
    }else if (sum === 21) { //user wins
        message = "You've got Blackjack!";
        hasBlackJack = true;
    } else {  //user loses
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
    console.log(message);
}



