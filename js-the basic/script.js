'use strict'; // must use??
// function expression

const fistname = ['yen', 'hanh', 'kohi'];
const lastname = 'duong';
const fullname =[];

for(let i = 0; i < fistname.length; i++){
	const data = `${fistname[i]} ${lastname}`;
	fullname.push(data);
}

console.log(fullname);

//------

//condition ? (run if true) : (run if false). another way to write if else
const value = 2 >0;
value ? console.log('true'): console.log('false');

//----------------------------------
//callback and high order function to not repeat yourself


//callback
function morning(name){
	
	return `good morning ${name}`;
}

function affternoon(name){
	return `good afternoon ${name}`;
}
//high order function
function greet(name,callbackF){
	console
	console.log(`${name},  ${callbackF(name)}`);
	//cb();
}

greet('yen',morning);
greet('hanh',affternoon);

//-------------------

const people = [
	{ name:'bob', age: 20, position: 'developer',salary: 200},
	{ name:'yen', age: 20, position: 'developer',salary: 300},
	{ name:'bob', age: 20, position: 'developer',salary: 500},
];

const total = people.reduce(function (acc, currItem){
	console.log(`total ${acc}`);
	console.log(`current money: ${currItem.salary}`);
	acc += currItem.salary;
	return acc;
}, 0)
console.log(total);


//--------------------------------
const date = new Date();
const month = date.getMonth();
console.log(date);

//---------------------------------
console.log(window);

//-------------------
function greet(){
	console.log('hello');
}

//expression

const greet1 = function(){
	console.log('abc');
}
greet1();

//arrow function
const calcArea = (radius) =>{
	return 2+2+radius;
}

const result = calcArea(5);
console.log(result);

const bill = (products, tax)=>{

} 

let people1 =['mario', 'yen','peter'];
//another way
const data = (person,stt)=>{
	console.log(stt,person);
}
people1.forEach(data); //data is callback function

// this is called callback function
people1.forEach(function(person,stt){
	console.log(stt,person);
})