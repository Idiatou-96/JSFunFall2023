let numbers = [10000, -8, 10, 0.7]; // e.g.

/**
 * Create a variable called "highest".
 * Loop through the array using a for loop (or for ... of loop) and return the highest number.
 * Set "highest" to the highest number.
 */

// WRITE YOUR ANSWER BELOW THIS LINE

// Initialize the highest variable with the first number in the array
let highest = numbers[0];

for (const number of numbers) {
  if (number > highest) {
    highest = number;
  }
}

console.log(highest); // This will output the highest number in the array
