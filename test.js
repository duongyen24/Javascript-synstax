let hands = ["rock", "paper", "scissor"];

function play(){
	let random = Math.floor(Math.random()*3); // making rang from 0 -> 2
	return hands[random];
}
console.log(play()) ;

const container = document.getElementById("container");
container.innerHTML = "<button onclick='buy()'>"+"Buy!" + "</button>";


function buy(){
	container.innerHTML += "<p> thank you for buying </p>";
}

const recipient = "James";
const name1 = "Yen";
const email = `
hey ${recipient}  
how is it going? 
cheers ${name1}`;
console.log(email);



