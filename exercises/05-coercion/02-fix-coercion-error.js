let num1 = 2; // e.g.
let num2 = "7"; // e.g.

/**
 * If I were to log the code below, it does not print out what I would expect.
 * For example, I expect "sum" to result in the number 7 instead of the string "27".
 * This should still work when "num1" and "num2" are equal to different values that could be strings or numbers.
 */

// WRITE YOUR ANSWER BELOW THIS LINE
//this will log 27
let sum = num1 + num2;
// this will log after I converted the num2 into an integer
let sum2 = num1 + Math.floor(num2);
