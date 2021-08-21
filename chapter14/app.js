localStorage.setItem('name','yen');
localStorage.setItem('age', 26);

let name1 =localStorage.getItem('name');
console.log(name1);

localStorage.removeItem('name');


name1 =localStorage.getItem('name');
console.log(name1); 

const data = [
	{

    userId: "a",
    id: 1,
    title: "delectus aut autem",
    completed: false
	}
];


localStorage.setItem('data',JSON.stringify(data));
const result = localStorage.getItem('data');
console.log(JSON.parse(result));



