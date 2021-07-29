/* blackjack game */

let firstCard = 3;
let secondCard = 11;
let cards = [firstCard, secondCard];
let sum = firstCard+secondCard;
let aLive = true;
let message = "";
let messageEl= document.getElementById("message-el");
//let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el"); // query css selector. class is .  id is #
let cardsEl = document.getElementById("cards-el");

	function startgame(){
		rendergame();
	}

	function rendergame(){

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
		cardsEl.textContent = "Card: "+ cards[0]+" "+ cards[1]; 

	}

	function newcard(){

		let card = 7;
		sum += card;
		cards.push(card);
		console.log(cards);
		rendergame();

		 
	}
	

	let arrays = [7,6,9];
	for ( let i =0; i < arrays.length; i++){
		console.log(arrays[i]);
	}
