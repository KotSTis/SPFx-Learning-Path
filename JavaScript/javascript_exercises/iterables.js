'use strict';

let range = {
	from: 1,
	to: 5
};

//1. initial call for..of 
range[Symbol.iterator] = function() {

  //2. Onward for..of works with the iterator obj
  return {
    current: this.from,
    last: this.to,

    //3. called on every iteration of the loop
    next() {
      //4. should return the value as an object
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return {done: true};
      }
    }
  };
};

for (let num of range) {
  alert(num);
}

//more consise, combining range and the next function

let range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },

  next() {
    if (this.current <= this.to) {
      return { done: false, value : this.current++};
    } else {
      return {done: true};
    }
  }
};
//consiser but we cant have 2 loops iterating over the same obj
//
let str = "Hello";
//same as (let char of str) alert(char)

let iterator = str[Symbol.iterator]();

while (true) {
  let result = iterator.next();
  if (result.done) break;
  alert(result.value);
}