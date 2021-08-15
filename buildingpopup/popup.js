const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');

//click button and popup show up
button.addEventListener('click',() =>{
	popup.style.display = 'block';  
})

//close pop up  by clicking x button
close.addEventListener('click',() =>{
popup.style.display = 'none';  
})

//close pop up by clicking outside
popup.addEventListener('click',() =>{
	popup.style.display = 'none';  
	})