"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// var inputColor = prompt("Pick a color: ")

function analyzeColor (inputColor) {
    if (inputColor === "blue") {
        return "Blue is the color of the sky!";
    } else if (inputColor === "red") {
        return "Strawberries are red!";
    } else if (inputColor === "cyan") {
        return "I don't know anything about cyan.";
    } else {
        return "The color you chose was " + inputColor + " and I didnt write a string for that, sorry.";
    }
}

console.log(analyzeColor("blue"));
console.log(analyzeColor("red"));
console.log(analyzeColor("cyan"));
console.log(analyzeColor("black"));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
function analyzeColors(color) {
    switch (color) {
        case "blue":
            return "Blue is the color of the ocean!";
            break;
        case "red":
            return "Red is the color of a stop sign.";
            break;
        case "cyan":
            return "I don't know many things that are cyan.";
            break;
        default:
            return "Sorry, I didn't create a unique string for the color "+ color;
            break;
    }
}

console.log(analyzeColors("blue"));
console.log(analyzeColors("red"));
console.log(analyzeColors("cyan"));
console.log(analyzeColors("black"));

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
var userInputOfColor = prompt("Pick a color:");

alert(analyzeColor(userInputOfColor));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function calculateTotal(luckNumber, totalAmount) {
    if (luckNumber === 5) {
        return "Congratulations, all your items are free!!!";
    } else if (luckNumber === 1) {
        return totalAmount - (.10 * totalAmount);
    } else if (luckNumber === 2) {
        return totalAmount - (.25 * totalAmount);
    } else if (luckNumber === 3) {
        return totalAmount - (.35 * totalAmount);
    } else if (luckNumber === 4) {
        return totalAmount - (.5 * totalAmount)
    } else {
        return "Sorry you do not receive a discount"
    }
}

console.log(calculateTotal(0, 500));
console.log(calculateTotal(1, 100));
console.log(calculateTotal(2, 200));
console.log(calculateTotal(3, 100));
console.log(calculateTotal(4, 500));
console.log(calculateTotal(5, 1000));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 5
var luckyNumber = Math.floor(Math.random() * 6);

var totalBill = parseFloat(prompt("What is the total of the bill?"));

alert("Your lucky number is "+ luckyNumber);
alert("The price before the discount has been applied is $" + totalBill);
alert("The price after the discount is: " + calculateTotal(luckyNumber, totalBill));

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

if (confirm("Do you want to enter in a number")) {
    var useInput = parseFloat(prompt("What is your number?"));
    if (!isNaN(useInput)){
        if(useInput % 2 === 0){
            alert(useInput + " is a even number.");
        } else {
            alert(useInput + " is an odd number");
        }

        alert(useInput + 100);

        if (useInput > 0) {
            alert("Your number is positive.");
        } else {
            alert("Your number is negative.");
        }
    }else {
        alert("You didn't enter in a number.")
    }
} else {
    alert("Sorry you do not want to play a game.");
}

// function numGame(num) {
//     var userNum = parseFloat(num);
//     if (!isNaN(userNum)){
//         if(userNum % 2 === 0){
//             alert(userNum + " is a even number.");
//         } else {
//             alert(userNum + " is an odd number");
//         }
//
//         alert(userNum + 100);
//
//         if (userNum > 0) {
//             alert("Your number is positive.");
//         } else {
//             alert("Your number is negative.");
//         }
//     }else {
//         alert("You didn't enter in a number.")
//     }
// }
//
// if (confirm("Do you want to enter in a number")) {
//     var userInput = prompt("What is your number?")
//     numGame(userInput);
// } else {
//     alert("Sorry you do not want to play a game.");
// }