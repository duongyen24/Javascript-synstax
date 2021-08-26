const users = [
	{name: 'mario', premium: true},
	{name: 'hanh', premium: false},
	{name: 'yen', premium: true},
	{name: 'kohi', premium: false}
];



const getPremium = (users) =>{
	return users.filter((user) =>{
		return !user.premium;
	})
};

export { getPremium , users as default};