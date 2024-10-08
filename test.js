// this is a constructor
const User = function(name){
	this.name = name;
	this.discordName = '@' + name;
}

//	this is a factory function
function createUser(name){
	const discordName = '@' + name;

	let reputation = 0; //private variable
	const setReputation = () => reputation;
	const getReputation = () => reputation++;
	return {name, discordName, setReputation, getReputation}
}

function createPlayer(name, level){
	const {setReputation, getReputation} = createUser(name);

	//closure
	const increaseLevel = () => level++;
	return {name, setReputation, getReputation, increaseLevel}
}

//IIFE : module pattern
const calculator = (function(){
	const add = (a, b) => a + b;
	const minus = (a,b) => a - b;
	const multiply = (a, b) => a * b;
	const div = (a, b) => a / b;

	return {add, minus, multiply, div};

})();

const aesha = createUser('Aesha');
//can only access the private variable via closure
aesha.getReputation();
aesha.getReputation();

const kitkit = createPlayer('Kitkit', 1);
console.log(calculator.add(2,2));

// you can only do something like this in factory function
console.log({playerName: kitkit.name, level: kitkit.increaseLevel()})