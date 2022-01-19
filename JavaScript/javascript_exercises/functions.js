'use strict'; //uses the new javascript

let userName = "kostas"; //outer variable, otherwise called global
//use them sparsely

function showMessage(){
	let message = "yellow world"; //inner variable
	alert(`${message} the administrator is ${userName}`);
	userName = confirm("is that correct?") ? userName :
	prompt("enter new admin name", userName);//uses the outer variable
}

//alert(message); wont work
alert(userName);
showMessage();
alert(userName)

function ask(question, yes, no){
	if (confirm(question)) yes()
	else no();
}

function showOk(){
	alert('you agreed');
}

function showCancel(){
	alert('you canceled');
}
//showOk and showCancelled in this case are callbacks
//They are expected to be called back as functions
//pass functions as arguments
ask("Do you agree?", showOk, showCancel);
//shorter way
//the functions that are defined inside the call have no name
//and hence they are called anonymous
ask(
	"Do you agree?",
	function() { alert('you agreed'); },
	function() { alert('you canceled');}
	);

//declared functions can be used anywhere
//expressed functions can only be used after theyve been typed


//we can use functions like variables like so

let age = prompt("What is your age?");

let welcome = (age < 18) ?
	function() { alert("Hello child!"); } :
	function() { alert("Good day adult!"); };

welcome();

//ARROW FUNCTIONS

let sum = (arg1, arg2) => arg1 + arg2;
alert(sum(1,2));
/* The arrow function is the shorter version of this 

let sum = function(arg1, arg2){
	return arg1 + arg2;
};
*/

//one argument
let double = n => n*2;
alert(double(3));
//zero arguments
let sayHi = () => alert("Hi!");
sayHi();
//multiline arrowfunction 
let sum2 = (a,b) => {
	let result = a + b;
	return result;
};

alert(sum2(2,3));

let ask2 = (question, yes, no) => {
	confirm(question) ? yes() : no();
};

ask2(
	"Do you agree?",
	() => alert("You agreed"),
	() => alert("You cancelled") 
	);