'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

alert("hello world");
//null is a special value meaning "empty"
var ageTest = null;

//undefined is the default "value" of an unnasigned variable
var dateOfBirth = void 0;

// typeof returns the type of the object
typeof dateOfBirth === "undefined" ? "undefined" : _typeof(dateOfBirth);

var user = {
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
var key = "likes the Raiders";
delete user[key];

//computed properties
var team = prompt("What is your NFL team?", "Raiders");
var pick = _defineProperty({}, team, 1);

//if both property and variable name are the same we can do this
function makeUser(name, age) {
	return {
		name: name, //same as name: name
		age: age //same as age: age
	};
}

//theres no property name limitations

var obj = {
	for: 1,
	let: 2,
	return: 3
};
alert(obj.for); //this works

alert(obj.NonExisitingProperty == undefined); // returns true
alert("for" in obj); //return true cause for is in obj
alert("NonExisitingProperty" in obj); //return false since NonExistingProperty is not in obj


//Object references

var firstObject = { name: "Mike" };
var secondObject = firstObject;
secondObject.name = "Hacked";

alert(firstObject.name); //this will alert Hacked
alert(firstObject == secondObject); //true they reference the same object
alert(firstObject === secondObject); //true
var a = {};
var b = {};
alert(a == b); //false they are different objects in memory

//cloning objects
Object.assign(a, firstObject); //destination, [source]
//also works like this
var clone = Object.assing({}, firstObject);
//we can use assign to also merge objects
var thirdObject = { surname: "Smith" };
Object.assign(b, firstObject, thirdObject);
alert(b.name + " " + b.surname);
//manual deep cloning
function deepClone(src) {
	var clone = {};
	for (var _key in src) {
		_typeof(clone[_key]) == Object ? clone[_key] = deepClone(src[_key]) : clone[_key] = src[_key];
	}
	return clone;
}
var temp = {
	name: "mike",
	surname: "jones",
	dateOfBirth: {
		day: 2,
		month: "November",
		year: 1996
	}
};

var newObject = deepClone(temp);
alert("name: " + newObject.name + ", surname: " + newObject.surname + ", \n\tdob: " + newObject.dateOfBirth.day + "/" + newObject.dateOfBirth.month + "/\n\t" + newObject.dateOfBirth.year);
