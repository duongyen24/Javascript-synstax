/* blackjack game */

let firstCard = 10;
let secondCard = 11;
let sum = firstCard+secondCard;
let aLive = true;
let message = "";
let messageEl= document.getElementById("message-el");
//let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el"); // query css selector. class is .  id is #
let cardsEl = document.getElementById("cards-el");

	function startgame(){

		if( sum < 21){
			message = "do you want to draw a new card?";
		
		} else if( sum === 21){ //stricly 21
			message = "you got blackjack";
			
		} else{
			message = "you loss";
			aLive = false;
			
		}
		messageEl.textContent = message;
		sumEl.textContent = "Sum: "+ sum;
		cardsEl.textContent = "Card: "+ firstCard+" "+ secondCard; 

	}

	function newgame(){
		console.log("draw in a new card from deck");
	}
