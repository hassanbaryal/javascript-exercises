const add = function(x, y) {
	return x + y
};

const subtract = function(x, y) {
	return x-y
};

const sum = function(array) {
  if (array.length === 0) return 0
	const summed = array.reduce((x,y) => {
    return x + y
  }, 0)
  return summed
};

const multiply = function(array) {
  if (array.length === 0) return 0
	const multiplied = array.reduce((x,y) => {
    return x * y
  }, 1)
  return multiplied
};

const power = function(x, y) {
	return Math.pow(x, y)
};

const factorial = function(x) {
	if (x === 0 || x === 1) return 1
	let result = x;
  while (x > 1) {
    x--
    result = result * x 
  }
  return result
  // return (x * factorial(x - 1))
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
