// normal function
function inchesToCm(inches) {
  const cm = inches * 2.54;
  return cm;
}

// function expression
const inchesToCmX = function (inches) {
  return inches * 2.54;
};

// arrow function
const inchesToCmA = (inches) => inches * 2.54;

console.log(inchesToCm(3));
console.log(inchesToCmX(3));
console.log(inchesToCmA(3));

// normal function
function add(a, b = 3) {
  const total = a + b;
  return total;
}

// function expression
const addX = function (a, b = 3) {
  const total = a + b;
  return total;
};

// arrow function
const addA = (a, b = 3) => a + b;

console.log(add(2, 5));
console.log(addX(2, 5));
console.log(addA(2, 5));

// arrow function - parenthesis necessary to return an object
const makeABaby = (first, last) => ({
  name: `${first} ${last}`,
  age: 0,
});

console.log(makeABaby('baby', 'dude'));

// IIFE
(function (age) {
  console.log(`My age is ${age}`);
})(100);

// methods
/* eslint-disable */
const person = {
  age: 49,
  name: 'Sascha Paukner',
  profession: 'Developer',
  // method
  getAge: function () {
    return this.age;
  },
  // short hand method
  getName() {
    console.log(`My name is ${this.name}!`);
    return `My name is ${this.name}!`;
  },
  // arrow method
  getProfession: () => {
    this.profession
  },
  getThis() {
    return this;
  }
};
/* eslint-enable */

const person1 = {
  age: 0,
  name: '',
  getAge() {
    return this.age;
  },
  getName() {
    return `My name is ${this.name}!`;
  },
};

// const sascha = person({});

const handleClick = function () {
  console.log('button was clicked');
};

const button = document.querySelector('.clickMe');
button.addEventListener('click', handleClick);
button.addEventListener('click', person.getName);
