let string = "racecar";

/**
 * A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., madam or racecar.
 *
 * Create a variable called "isPalindrome".
 * It should equal true if "string" is a palindrome
 * and false if it is not.
 *
 * Use the split and join methods to solve this problem.
 */

// WRITE YOUR ANSWER BELOW THIS LINE

// Split the string into an array of characters, reverse the array, and join it back into a string
let reversedString = string.split("").reverse().join("");

// Check if the reversed string is equal to the original string to determine if it's a palindrome
let isPalindrome = string === reversedString;

console.log(isPalindrome); // This will output true if "string" is a palindrome, false otherwise
