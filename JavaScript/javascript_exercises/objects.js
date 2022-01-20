'use strict';

alert("hello world");
//null is a special value meaning "empty"
let ageTest = null;

//undefined is the default "value" of an unnasigned variable
let dateOfBirth;

// typeof returns the type of the object
typeof dateOfBirth;

let user = {
	name: "Kostas",
	age: 25,
	"likes the Raiders": true //property names can be phrases. They have to be quoted
};

alert(user.age);
//add new properties
user.isAdmin = true;
//removing properties
delete user.isAdmin;

//we reference them like so
alert(user["likes the Raiders"]);
//and like so
let key = "likes the Raiders";
delete user[key];

//computed properties
let team = prompt("What is your NFL team?", "Raiders");
let pick = {
	[team]: 1 //this takes the value of the team variable so by default Raiders: 1 
};

//if both property and variable name are the same we can do this
function makeUser(name, age){
	return {
		name, //same as name: name
		age //same as age: age
	};
}

//theres no property name limitations

let obj = {
	for: 1,
	let: 2,
	return: 3
};
alert(obj.for); //this works

alert(obj.NonExisitingProperty == undefined); // returns true
alert( "for" in obj) //return true cause for is in obj
alert("NonExisitingProperty" in obj) //return false since NonExistingProperty is not in obj


//Object references

let firstObject = {name: "Mike"};
let secondObject = firstObject;
secondObject.name = "Hacked";

alert(firstObject.name) //this will alert Hacked
alert(firstObject == secondObject); //true they reference the same object
alert(firstObject === secondObject); //true
let a = {};
let b = {};
alert(a == b) //false they are different objects in memory

//cloning objects
Object.assign(a, firstObject) //destination, [source]
//also works like this
let clone = Object.assing({}, firstObject);
//we can use assign to also merge objects
let thirdObject = {surname: "Smith"};
Object.assign(b, firstObject, thirdObject);
alert(`${b.name} ${b.surname}`);
//manual deep cloning
function deepClone(src){
	let clone = {};
	for(let key in src){
		typeof(clone[key]) == Object ? 
		clone[key] = deepClone(src[key]) :
		clone[key] = src[key];
	}
	return clone;
}
let temp = {
	name: "mike",
	surname: "jones",
	dateOfBirth: {
		day: 2,
		month: "November",
		year: 1996
	}
};

let newObject = deepClone(temp);
alert(`name: ${newObject.name}, surname: ${newObject.surname}, 
	dob: ${newObject.dateOfBirth.day}/${newObject.dateOfBirth.month}/
	${newObject.dateOfBirth.year}`);

user = {
	name: "John",
	age: 30
};

user.sayHi = function() {
	alert("Hello!");
};

user.sayHi();

user = {
	sayHi() {
		alert("Hello, my name is " + this.name);
	}
}; //method has been assigned to object

//arrow functions have no this they reference the object this
let temp2 = {
	nam: "mike",
	sayHi() {
		let arrow = () => alert(this.nam);
		arrow();
	}
};