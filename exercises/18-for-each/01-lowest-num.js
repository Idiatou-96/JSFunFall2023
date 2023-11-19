let lowestNumber = Infinity; // This is the highest possible number in JavaScript
const numbers = [1, 10, -2, 3, 4]; // e.g.

const printNumbers = (number, index, array) => {
  lowestNumber = numbers;
};
numbers.forEach(printNumbers);
/**
 * Using ".forEach", loop through the array "numbers"
 * and set "lowestNumber" equal to the lowest number in the array.
 *
 * Your answer should still work if there are different numbers inside the array "numbers".
 */

// WRITE YOUR ANSWER BELOW THIS LINE

const updateLowestNumber = (number, index, array) => {
  if (number < lowestNumber) {
    lowestNumber = number;
  }
};

numbers.forEach(updateLowestNumber);

console.log(lowestNumber);
