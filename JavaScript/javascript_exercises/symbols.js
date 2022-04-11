'use strict';

//id is a symbol with descritpion id
//let id = new Symbol("id");

//each symbol is unique, even if they have the same description

//symbols cant be converted to strings
//to print symbols use .toString() or .description
//

let user = {
	name: "John"
};

let id = Symbol("id");

user[id] = 1;

alert( user[id] );

//symbols in objects
let id = Symbol("id");

let user2 = {
	name: "Mike",
	[id]:123 //not "id": 123
	money:1000,
	// [Symbol.toPrimitive](hint) {
	// 	alert(`hint: ${hint}`);
	// 	return hint == "string" ? `{name: "${this.name}"}` : this.money;
	// }
	toString() {
		return `{name: "${this.name}"}`;
	},
	valueOf() {
		return this.money;
	}
};

alert(user);
alert(+user);
alert(user + 500);

function random(min, max) {
	return ( Math.random() + +min ) * ( max - min );
}