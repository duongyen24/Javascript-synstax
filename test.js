let hands = ["rock", "paper", "scissor"];

function play(){
	let random = Math.floor(Math.random()*3); // making rang from 0 -> 2
	return hands[random];
}
console.log(play()) ;