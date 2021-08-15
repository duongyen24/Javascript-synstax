const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,12}$/;
//const input = document.querySelector('#username');


//form validation
form.addEventListener('submit', (e) => {
  e.preventDefault();
  //console.log(input.value);
  //console.log(submit.username.value); // faster way
  const username = form.username.value;

  let result = usernamePattern.test(username);
  if (result) {
    feedback.textContent = "valid";
  } else {
    feedback.textContent = "invalid";
  }
});

//testing regular expression

//const username = 'yensdfs';
//const pattern = /^[a-z]{6,}$/;
//let result = pattern.test(username);
//console.log(result);


//live form validation

form.username.addEventListener('keyup', e =>{
	if(usernamePattern.test(e.target.value)){
		console.log('passed');
	}else{
		console.log('failed');
	}
})



