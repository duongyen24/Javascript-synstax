//let box = document.getElementById("box");
//box.addEventListener("click",function(){
//	console.log("i want to open it"); 
//})


let inputbtn = document.getElementById("input-btn");
let myLeads = [];
let inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("unorder-list");


inputbtn.addEventListener("click", function(){
	myLeads.push(inputEl.value);	
	//console.log(myLeads);
	clear();
	renderLoad();
	
	
	
})

function renderLoad(){

	let listItems = " ";

	for(let i =0; i <myLeads.length;i++){

	listItems += "<li>"+ "<a href='myLeads[i]'>" +myLeads[i]+ "</a></li>" ;
	/* another way of innerHTML
	create element
	const li = document.createElement("li");
	li.textContent = myLeads[i];
	ulEl.append(li);
*/
		
}
	ulEl.innerHTML = listItems;

	
}

function clear(){
	if ( inputEl.value !== ""){
		inputEl.value = "";
	}
}






