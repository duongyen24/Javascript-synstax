//console.log(1);
//console.log(2);

//setTimeout(() =>{
//	console.log('callback function run');
//},2000);

//console.log(3);
//console.log(4);


const callback = ((err,data) =>{
	console.log('callback fired');
	if(err){
		console.log(err);
	}else{
		console.log(data);
	}
});

const gettodo = (callback) =>{
const request = new XMLHttpRequest();

request.addEventListener('readystatechange',()=>{
	//console.log(request, request.readyState); //log out state
	if(request.readyState === 4 && request.status ===200){
		callback(undefined,request.responseText);
		//console.log(request.responseText ); //log out json file to console
		callback
	}else if(request.readyState ===4){
		callback('error', undefined);

	}
})

request.open('GET','https://jsonplaceholder.typicode.com/todos/');
request.send();

};

gettodo(callback);







/*arrow function 


function gettodo(callback) {
	console.log('arrow');
	callback();
};

gettodo(function (){
	console.log('function');
})

*/
   