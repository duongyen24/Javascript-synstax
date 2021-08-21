/*fetch API

fetch('./a.json').then((resolve)=>{
	console.log('resolve', resolve );
	return resolve.json();
}).catch((err)=>{
	console.log('error',err);
}); 
*/

//single fetch request
const gettodo = async () =>{
	const response = await fetch('./a1.json');
	
	if( response.status !=200){
		throw new Error('error!!!');
	}
	const data = await response.json();
	return data;
};

gettodo().then((data =>{
	console.log(data);
})).catch((err)=>{
	console.log(err.message);
});




//Parallel fetch requests
const getsomething = async ()=>{
	const [re1,re2] = await Promise.all([
		fetch('./b.json'),
		fetch('./c.json')
	]);

	const reB = await re1.json();
	const reC = await re2.json();
	return [reB,reC];
}

getsomething().then(([reB,reC]) =>{
	console.log(reB);
	console.log(reC);
});