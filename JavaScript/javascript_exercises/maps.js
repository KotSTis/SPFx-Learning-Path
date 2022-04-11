'use strict';

let map = new Map();

map.set('1', 'str1'); //string key
map.set(1, 'num1'); //number key
map.set(true, 'bool1'); //boolean key

//map doesnt convert the type
alert(map.get(1)); //"num1"
alert(map.get('1')); //"str1"
alert(map.size); //3

//map.set is chainable eg.
map.set('1', 'str1')
  .set(1, 'num1')
  .set(true, 'bool1');

//apply the function to each element
map.forEach( (value, key, map) => {
  alert(`${key}: ${value}`);
});

//we can array initialize a map
let arrayMap = new Map([
  ['1', 'str1'],
  [1, 'num1'],
  [true, 'bool1']
]);

alert(arrayMap.get('1')); //str1
//we can make a map from an object
let obj = {
  name: "John",
  age: 30
};

let mapFromObj = new Map(Object.entries(obj));

alert(mapFromObj.get('name'));
//and also the reverse
let pricesMap = new Map([
  ['banana', 1],
  ['orange', 4],
  ['meat', 9]
]);
let prices = Object.fromEntries(pricesMap);

alert(prices.orange);

//weakmaps
//if its items become unreachable they are garbage collected
let weakMap = new WeakMap();
let obj = {};
weakMap.set(obj, "ok");
weakMap.set("test", "Whoops");//error

//transforming objects
//Use Object.entries(obj) to get an array 
//of key/value pairs from obj.
//Use array methods on that array, 
//e.g. map, to transform these key/value pairs.
//Use Object.fromEntries(array) on the resulting array 
//to turn it back into an object.
let doublePrices = Object.fromEntries(
  Object.entries(prices).map(entry => [entry[0], entry[1] * 2])
  );

alert(doublePrices.meat);

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function sumSalaries(salaries){
  let sum = 0;
  for(let salary of Object.values(salaries)) {
    sum += salary;
  }
  return sum;
}
//OR
function sumSal(salaries) {
  return Object.values(salaries).reduce((a,b) => a + b, 0);
}

function count(obj) {
  return Object.keys(obj).length;
}