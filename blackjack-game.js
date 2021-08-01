/* blackjack game */

let cards = [];
let sum = 0;
let isAlive = false;
let hasBlackjack = false;
let message = "";
let messageEl= document.getElementById("message-el");
//let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el"); // query css selector. class is .  id is #
let cardsEl = document.getElementById("cards-el");

// create an object player. A function of an object is call method -> player.sayhi();
let player = {
	name : "Per",
	chips : 145,
	sayhi: function() {
		console.log("hi");
	}
}

//player.sayhi();
let playerEl = document.getElementById("player-el");
playerEl.textContent =  player.name + ": $" + player.chips ;


	//gemerate random cards
	function getrandomcard(){
		let random= Math.floor(Math.random()*13)+1; // 1 -> 13 
		
		if( random ==1 ){
			return 11;
		}
		if( random > 10){
			return 10;
		} else{
			return random;
		}		
	}

	function startgame(){
		isAlive = true;
		 let firstCard = getrandomcard();
		let secondCard = getrandomcard();
		sum = firstCard + secondCard;
		cards = [firstCard, secondCard];
		rendergame();
	}

	function rendergame(){
		cardsEl.textContent = "Cards: "		
		for ( let i = 0; i < cards.length; i++){
			cardsEl.textContent +=  cards[i]+ " ";	
		}

		if( sum < 21){
			message = "do you want to draw a new card?";
		
		} else if( sum === 21){ //stricly 21
			message = "you got blackjack";
			
		} else{
			message = "you loss";
			isAlive = false;
			
		}
		messageEl.textContent = message;
		sumEl.textContent = "Sum: "+ sum;
		//cardsEl.textContent = "Card: "+ cards[0]+" "+ cards[1]; 

	}


		function newcard(){
			if ( isAlive == true && hasBlackjack == false){
			let card = getrandomcard();
			sum += card;
			cards.push(card);
			
			rendergame();
			}
		} 
	

	
	

	