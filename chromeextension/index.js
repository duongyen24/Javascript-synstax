//let box = document.getElementById("box");
//box.addEventListener("click",function(){
//	console.log("i want to open it");
//})

/* localStorage can only store strings. 
let myLeads = `[www.youtube.com]`;

1. turn string to array
myLeads = JSON.parse(myLeads);

 2. push new value to array
myLeads.push("abc");

 3. turn array to string again
myLeads = JSON.stringify(myLeads);
console.log(myLeads);
*/

//console.log(leadFromlocalstoreage);

let inputbtn = document.getElementById("input-btn");
let inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("unorder-list");

let myLeads = [];
const leadFromlocalstoreage = JSON.parse(localStorage.getItem("myLeads"));

//check if true or not
if( leadFromlocalstoreage){
	myLeads = leadFromlocalstoreage;
	renderLoad();
}

inputbtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  //console.log(myLeads);
  clear();
  
  //local storage
  localStorage.setItem("myLeads", JSON.stringify(myLeads)); //(key , value)
  console.log(localStorage.getItem("myLeads"));
  //localStorage.clear();
  renderLoad();
});

function renderLoad() {
  let listItems = " ";

  for (let i = 0; i < myLeads.length; i++) {
    /* another way of innerHTML
	create element
	const li = document.createElement("li");
	li.textContent = myLeads[i];
	ulEl.append(li);
	*/

    //open link in new tab
    //listItems += "<li>"+ "<a target='_blank' href=' "+myLeads[i]+" '>" +myLeads[i]+ "</a></li>" ;

    //modify the open link in new tab with template strings
    listItems += `
		<li>
			<a target='_blank' href=' ${myLeads[i]}'>
			${myLeads[i]} 
			</a>
		</li>`;
  }
  ulEl.innerHTML = listItems;
}

function clear() {
  if (inputEl.value !== "") {
    inputEl.value = "";
  }
}
