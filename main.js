// Function Declaration
function greet() {
  console.log('Function Declaration');
}

//Function Expression
const greet = function () {
  console.log('Function Expression');
};

//Arrow Function
const add = (a, b) => a + b;

// Anonymous Function
() => console.log('Hi');

// Higher-Order Function
const higherOrder = (callback) => {
  callback();
};
higherOrder(() => console.log('I am a callback function!'));

//Immediately Invoked Function Expression (IIFE)
(function () {
  console.log('IIFE is executed!');
})();

// Recursive Function
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5));
