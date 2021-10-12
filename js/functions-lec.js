"use strict";

// A function is a block of reusable code that performs a specific task.  Functions typically take in an input, and
// produces an output.

// Functions we have used so far:
// - prompt();
// - alert();
// - Number();
// - parseFloat();
// - parseInt();
// - .toFixed();
// - .toUpperCase();
// - .toLowerCase();


// When executing a function, we call the name of the function, following any input inside of the parentheses known as
// arguments.

// Function Structure
// When creating a function, it begins with the function keyword followed by the name of the function and then
// parentheses.  Inside the parentheses will contain parameters that the function takes in.

function todaysDate(greeting) {
    return greeting + Date();
}

// Execute function

var date = todaysDate("Today's date is ");
console.log(date);

// Function declaration
function echo(phrase) {
    return phrase + "" + phrase;
}

// console.log(echo("hello!"));  returns phrase once = hello! hello!
console.log(echo(echo("hello!"))); // returns phrase twice = hello! hello! hello! hello!
// can plug in a result of a function within another function

//Function expression / anonymous function
var sayBye = function (name) {
    return 'Goodbye ' + name;
}

console.log(sayBye("Mario"));

// Example:

// Create a function which takes in two number parameters to find the hypotenuse angle.

// Parameters are the placeholders stated in the function definition (a, b)
function findHypotenuse(a, b) {
    var result;
    result = Math.sqrt((a*a) + (b*b));
    return result;
}

// Have a triangle with the sides of 4 and 5
// Execute function to find the hypotenuse

// Arguments are the values that are put into the function when executed (4, 5)
console.log(findHypotenuse(4, 5));

// Functions do not REQUIRE parameters
function printFour() {
    return 'four'
}

console.log(printFour());

// Function Scope

// Scope is a term to describe where a variable can be accessed.  With a global variable that exists in the HTML
// document, you can console.log its value in connected files.

// Immediately Invoked Function Expression (IIFE)

(function () {
    var ifyVar = 'I am local to the IIFE'
    })();
// Function must be wrapped in a IIFE to prevent global contamination and make them local

// console.log(ifyVar); ifyVar is a local variable because it is inside a function which causes it to be local

