let booleanValue = true;
alert(typeof booleanValue); //boolean

booleanValue = String(booleanValue);
alert(typeof booleanValue) //string

//numeric conversion
let stringValue = "5";
alert(typeof stringValue); //string

stringValue = Number(stringValue);
alert(typeof stringValue) //number

let a = 5;
//unary minus
a = -a;

let b = "2";
let c = "3";

alert(+b + +c);

let counter = 1;
let d = ++counter;

alert("counter: " + counter);
alert("d variable: " + d);

d = counter++;

alert("counter: " + counter);
alert("d variable: " + d);

//String Comparisons
alert('a'>'A'); //true
//why? because 'a' has a greater index in the unicode js order

//when comparing different types, js converts them to numbers
alert('2' > -2); // true alert
alert(true == 1); //bool are converted to 0/1

a = 0; //boolean conversion returns false
b = "0"; //boolean conversion returns true

alert(a == b);  //true because they are both converted to numbers
				//to get the correct boolean result(false) we have to
				//explicitely convert them to Boolean

// strict equality operator === will not convert types
// will return false if compared vars are not the same type
alert( a === b); //false

//interesting behavior
alert(null === undefined); //false
alert(null == undefined); //true
//for arithmetic conversions null becomes 0, undefined becomes NaN

// if the condition is true, first statement is returned, otherwise the second
result = (a > b) ? a : b;
//can also be used as if else during variable assignement 
let tertiary = (a > b) ? a : //if a > b return a
	(b > c) ? b : // else if b > c return b
	(c > d) ? c : // else if c > d return c
	d; // else return d

alert(tertiary);