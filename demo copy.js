

/* how to display an increment number
DOM: document object model - how to use JS to modify a website
*/
let count = 0
let countEl = document.getElementById("count-el") //h2 elemetn, this allso is called a function
function increment() {
	count = count +1
	countEl.innerText = count
	//console.log(count)
}

// create save function
 
function save(){
	console.log(count)
}
save()


//function sum(){
//	let lap1 = 34
//	let lap2 = 45
//	let lap3 = 56
//	let sum = lap1+lap2+lap3
//	console.log(sum)
//}
//sum() // call the function


						// how to increase a number
//let lap = 0;
//function incrementLap() {
//	lap = lap + 1
//}

//incrementLap()

//incrementLap()

//console.log(lap)