// this is a constructor
function User(name){
	this.name = name;
	this.discordName = '@' + name;
}

//	this is a factory function
function createUser(name){
	const discordName = '@' + name;
	return {name, discordName}
}

const johm = new User('Aesha')

console.log(johm.name)