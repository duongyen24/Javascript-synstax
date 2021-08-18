const a = [
	{name:'a' , price:40},
	{name:'b', price:50},
	{name: 'a', price:90},
	{name: 'd', price:30}
];

const filtered = a.filter(product1 =>{
	return product1.price>40;
});
console.log(filtered);

const mapped = filtered.map(map =>{
	return `the price is ${map.price}`;
});
console.log(mapped);


const temp = a.map( (data) =>{
	if(data.price>= 40){
		return {name: data.name , price: data.price/2};
	}else{
		return data;
	}
	
})

console.log(temp);
console.log(a);

const reduceMethod = a.reduce((acc,curr)=>{
	if(curr.name === 'a'){
		acc += curr.price;
	}
	return acc;
},0);

console.log(reduceMethod);
console.log(a);


const b = [30,100,60,90];
const findMethod = b.find((price) =>{
	return price > 50;
});

console.log(findMethod);

