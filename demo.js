
/* how to display an increment number
DOM: document object model - how to use JS to modify a website
*/

let countEl = document.getElementById("count-el"); //h2 elemetn, this allso is called a function
let count = 0;
function increment() {
	count += 1;
	countEl.textContent = count;
	//console.log(count)
}

// create save function
let saveEl = document.getElementById("save-el"); 
function save(){

	let result = count + " - ";
	saveEl.textContent += result;  // innerText alternative	
	countEl.textContent = 0; // reset count to 0
	count = 0;
}

// create error button
let errorEl = document.getElementById("error");
function error(){
	errorEl.textContent = "something went wrong" ;

}


let welcomeEl = document.getElementById("welcome-el");

let name1 = "yen ";
let greeting = "welcome";

//welcomeEl.innerText = name1 + greeting +"❤" ;


//-------------------------------------------------

let num1 = 8;
let num2 = 2;
let sumEl = document.getElementById("sum-el") ;

document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;
function add(){
	let sum = num1 + num2;
	sumEl.textContent = "Result: " + sum;
}

function subtract(){
	console.log(num1 - num2);
}
function divide(){
	console.log(num1 / num2);
}
function multify(){
	console.log(num1 * num2);
}

//-------------------------------------------------------


	 
	
	
	
	




