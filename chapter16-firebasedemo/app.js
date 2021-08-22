const list = document.querySelector('ul');

const addRecipe = (recipe)=>{
	let title = recipe.title;
	let time = recipe.created_at.toDate();

	let html = `
		<li> 
			<div> ${title}</div>
			<div> ${time}</div>
								
		</li>
	`;
	list.innerHTML += html;
};








//request data
db.collection('recipes').get().then((snapshot) =>{

	//query single data
	//console.log(snapshot.docs[0].data());

	//query all data
	snapshot.docs.forEach(doc => {
		addRecipe(doc.data());
		//console.log(doc.data());
	});
}).catch((err) =>{
	console.log(err);

});
