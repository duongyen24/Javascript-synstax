const a = [
	{name:'a' , price:40},
	{name:'b', price:50},
	{name: 'c', price:90},
	{name: 'd', price:30}
];

const temp = a.map( (data) =>{
	if(data.price>= 40){
		return {name: data.name , price: data.price/2};
	}else{
		return data;
	}
	
})

console.log(temp);