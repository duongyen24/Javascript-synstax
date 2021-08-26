console.log('dom file');

const body = document.querySelector('body');

const styleBody = () =>{
	body.style.background = 'peachpuff';

};

const addTitle = (text) =>{
	const title = document.createElement('h1');
	body.appendChild(title);
	title.textContent  = text;
	
}

//styleBody();
//addTitle('hello');

export{styleBody, addTitle};