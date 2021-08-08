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
