let subtotal = 50.0; // e.g.
let tip = 0.2; // e.g.

let total;

/**
 * If a customer leaves a tip, change the variable "total"
 * so that it is equal to the subtotal plus the subtotal times the tip.
 *
 * If a customer does not leave a tip (that is, "tip" equals 0), "total" should equal the "subtotal".
 *
 * This should still work when "subtotal" and "total" are equal to different numbers.
 */

// WRITE YOUR ANSWER BELOW THIS LINE

if (tip > 0) {
  total = subtotal + subtotal * tip;
} else {
  total = subtotal;
}

const age = true;
const myName = true;

if (age && myName) {
  console.log("what is your name and age");
}

const driveCar = true;
const takeUber = true;

if (driveCar || takeUber) {
  console.log("I will be on time ");
} else {
  console.log("I will be late ");
}
