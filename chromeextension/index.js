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

const inputbtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("unorder-list");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");

let myLeads = [];
const leadFromlocalstoreage = JSON.parse(localStorage.getItem("myLeads"));

//check if true or not
if (leadFromlocalstoreage) {
  myLeads = leadFromlocalstoreage;
  render(myLeads);
}

//we try to make this function reuse and dynamic
function render(leads) {
  let listItems = " ";

  for (let i = 0; i < leads.length; i++) {
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
			<a target='_blank' href=' ${leads[i]}'>
			${leads[i]} 
			</a>
		</li>`;
  }
  ulEl.innerHTML = listItems;
}

inputbtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  //console.log(myLeads);
  inputEl.value = "";

  //local storage
  localStorage.setItem("myLeads", JSON.stringify(myLeads)); //(key , value)
  console.log(localStorage.getItem("myLeads"));
  //localStorage.clear();
  render(myLeads);
});

//modify delete btn
deleteBtn.addEventListener("click", function () {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});

//log out nav link
//const tabs = [{ url: "https://www.youtube.com" }];
tabBtn.addEventListener("click", function () {
  //console.log(tabs[0].url);
  //render the link in tabs to UI, using chrome API to get the url at current tab
  //query chrome API
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});
