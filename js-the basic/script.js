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