const list = document.querySelector('ul');
const form = document.querySelector('form');


const addRecipe = (recipe,id)=>{
	let title = recipe.title;
	let time = recipe.created_at.toDate();

	let html = `
		<li data-id ="${id}"> 
			<div> ${title}</div>
			<div> ${time}</div>
			<button class = "btn btn-danger btn-sm my-2"> delete</button>
								
		</li>
	`;
	list.innerHTML += html;
};


//realtime data

db.collection('recipes').onSnapshot(snapshot =>{
	console.log(snapshot.docChanges());
});


//request data

//db.collection('recipes').get().then((snapshot) =>{

//	//query single data
//	//console.log(snapshot.docs[0].data());

//	//query all data
//	snapshot.docs.forEach(doc => {
//		addRecipe(doc.data(), doc.id); //attact id to li tag
//		//console.log(doc.data());
//	});
//}).catch((err) =>{
//	console.log(err);

//});

// add data

form.addEventListener('submit', e =>{
	e.preventDefault();

	const now = new Date();
	const recipe = {
		title: form.recipe.value, //recipe is ID
		created_at: firebase.firestore.Timestamp.fromDate(now)
	};

	db.collection('recipes').add(recipe).then(() =>{
		console.log('recipe add');
	}).catch((err) =>{
		console.log(err);
	});

});


//delete data
list.addEventListener('click', e => {
	//console.log(e); check e property
	if(e.target.tagName === 'BUTTON'){
		const id = e.target.parentElement.getAttribute('data-id'); 
		db.collection('recipe').doc(id).delete().then(() =>{
			console.log('deleted');
		})

	}
	
})



 



