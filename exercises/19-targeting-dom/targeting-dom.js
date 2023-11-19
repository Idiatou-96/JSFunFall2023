/**
 * You will be targeting DOM elements (the HTML) on the page using
 * "document.querySelector" or "document.querySelectorAll"
 * You will then use "console.log" to print the results.
 *
 * @example console.log( document.querySelector("#myTarget") );
 *
 * When you use "document.querySelectorAll", you must loop through each
 * element in the collection and console.log each element. (See the slides)
 *
 * Do not change the HTML unless you are instructed to do so.
 */

//Target the first <li> element:
console.log(document.querySelector("li"));

//Target the element with the id "myId"
console.log(document.querySelector("#myId"));

//Target every <li> element with a yellow background:
(function () {
  const things = document.querySelectorAll("li.bg-warning");
  things.forEach((thing) => {
    console.log(thing);
  });
})();

//target the button
console.log(document.querySelector("#btn1"));

//Target every <a> element that is a social media site:

(function () {
  const things = document.querySelectorAll(
    'a[href*="facebook.com"], a[href*="twitter.com"], a[href*="instagram.com"]'
  );
  things.forEach((thing) => {
    console.log(thing);
  });
})();

//Target the elements with the id "myRow":
console.log(document.querySelector("#myRow"));

//Target each cell inside the row with the id "myRow":
(function () {
  const things = document.querySelectorAll("#myRow .col");
  things.forEach((thing) => {
    console.log(thing);
  });
})();
