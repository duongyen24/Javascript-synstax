//console.log(1);
//console.log(2);

//setTimeout(() =>{
//	console.log('callback function run');
//},2000);

//console.log(3);
//console.log(4);

/*arrow function 

function gettodo(callback) {
	console.log('arrow');
	callback();
};

gettodo(function (){
	console.log('function');
})

*/

/*
const callback = ((err,data) =>{
	console.log('callback fired');
	if(err){
		console.log(err);
	}else{
		console.log(data);
	}
});
*/

/*promise ex

const getSomthing = () =>{    //arrow
	return new Promise((resolve, reject)=>{
		resolve('some data');
		reject('some error');
	});
};

getSomthing().then( (data)=>{
	console.log(data);
}).catch((err) =>{
	console.log(err);
})

*/

const gettodo = (resource) => {
  return new Promise( function(resolve, reject) {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      //console.log(request, request.readyState); //log out state
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data)
		//callback(undefined, data);
        //console.log(request.responseText ); //log out json file to console
      } else if (request.readyState === 4) {
        reject('error');
		//callback("error", undefined);
      }
    });

    //request.open('GET','https://jsonplaceholder.typicode.com/todos/');
    request.open("GET", resource);
    request.send();
  });
};

//callback hell for 1 by 1
/*
gettodo("../chapter12/a.json", (err, data) => {
  console.log(data);
  gettodo("../chapter12/b.json", (err, data) => {
    console.log(data);
    gettodo("../chapter12/c.json", (err, data) => {
      console.log(data);
    });
  });
});
*/


// chaining promise 
gettodo('../chapter12/a.json').then((data)=>{
	console.log('1: ' ,data);
	return gettodo('../chapter12/b.json');
}).then(data =>{
	console.log('2: ' ,data);
	return gettodo('../chapter12/c.json');
}).then(data =>{
	console.log('3: ', data);
}).catch((err) =>{
	console.log(err);
});