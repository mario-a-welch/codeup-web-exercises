"use strict";

(function () {
    //Write a function called identity(input) that takes in an argument called input and returns that input

    function identity(input) {
        return input;
    }

    console.log(identity("Maverick"));
    console.log(identity(5));

    //Write a function called getRandomNumber(min, max) that returns a random number between min and max values sent to
    //that function call

    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min; // includes the max num
        // return Math.floor(Math.random() * (max - min)) + min; excludes the max #
    }

    console.log(getRandomNumber(2, 10));
    console.log(getRandomNumber(1, 5));

    //Write a function called first(input) that returns the first character in the provided string
    function first(input) {
        if (typeof input === "string") {
            return input.charAt(0); // charAt(index of the character you want to return) returns the character
        } else {
            return false;
        }
    }

    console.log(first("Mario"));
    console.log(first("code"));

    //Write a function called last(input) that returns the last character in the provided string
    function last(input) {
        if(typeof input === "string") {
            return input.charAt(input.length - 1);
        } else {
            return false;
        }
    }

    console.log(last('Dog'));
    console.log(last('JavaScript'));

    //Write a function called rest(input) that returns everything but the first character of a string
    function rest(input) {
        if(typeof input === "string") {
            return input.substring(1, input.length - 1);
        } else {
            return false;
        }
    }

    console.log(rest("I love to code!"));

    //Write a function called reverse(input) that takes a string and returns it reversed
    function reverse(input) {
        var reverseString = '';
        for (var i = input.length -1; i >= 0; i--) {
            reverseString += input[i];
        }
        return reverseString
    }

    console.log(reverse('dog'));
    console.log(reverse('basketball'));

    //Write a function called isNumeric(input) that takes an input and returns a boolean if the input is numeric
    function isNumeric(input) {
        if(typeof input === 'number') {
            return true;
        } else {
            return false;
        }
    }

    console.log(isNumeric(5));
    console.log(isNumeric("apple"));

    //Write a function called count(input) that takes in a string and returns the number of characters
    function count(input) {
        return input.length;
    }

    console.log(count('car'));
    console.log(count('What are you doing?'))

    //Write a function called add(a, b) that returns the sum of a and b
    function add(a, b) {
        return a + b;
    }

    console.log(add(9, 8));
    console.log(add(7, 27));

    //Write a function called subtract(a, b) that return the difference between the two inputs
    function subtract(a, b) {
        return a - b;
    }

    console.log(subtract(7, 5));
    console.log(subtract(12, 5));

    //Write multiply(a, b) function that returns the product
    function multiply(a, b) {
        return a * b;
    }

    console.log(multiply(9, 9));
    console.log(multiply(7, 7));

    //Write a divide(numerator, denominator) function that returns a divided by b
    function divide(a, b) {
        return a / b;
    }

    console.log(divide(12, 3));
    console.log(divide(64, 8));

    //Write a remainder(number, divisor) function that returns the remainder left over when dividing number by the divisor
    function remainder(number, divisor) {
        return number % divisor;
    }

    console.log(remainder(49, 6));
    console.log(remainder(57, 4));

    //Write a function square(a) that takes in a number and returns the number multiplied by itself
    function square(a) {
        return a * a;
    }

    console.log(square(6));
    console.log(square(5));

    //Write a function called sumOfSquares(a, b) that uses only your add() function and your square function and not + or * operatros
    function sumOfSquares(a, b) {
        return add(square(a), square(b));
    }

    console.log(sumOfSquares(5, 4));

    //Write a function called doMath(operator, a, b) that takes 3 parameters.  The first parameter is the name of the math function you want to apply. a and b are the two numbers to run that function on.
    function doMath(operator, a, b) {
        if(operator === 'add' || operator === 'sum' || operator === 'addition' || operator === '+') {
            return add(a, b);
        } else if(operator === 'subtract' || operator === 'subtraction' || operator === 'difference' || operator === '-') {
            return subtract(a, b);
        } else if(operator === 'multiply' || operator === 'multiplication' || operator === 'product' || operator === '*') {
            return multiply(a, b);
        } else if(operator === 'divide' || operator === 'division' || operator === '/') {
            return divide(a, b);
        } else {
            return false;
        }
    }

    console.log(doMath('add', 25, 25));
    console.log(doMath('-', 17, 2));
    console.log(doMath('product', 7, 3));
    console.log(doMath('/', 49, 7));
})();