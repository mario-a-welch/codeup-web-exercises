"use strict"

// Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the
// user if they enter invalid input.Use a loop and the continue statement to output all the odd numbers between 1 and
// 50,  except for the number the user entered.



while (true) {
    var userInput = parseInt(prompt("Enter a  odd number from 1 to 50"));
    if(userInput % 2 === 1){
        break;
    }
}

console.log("Number to skip:" + userInput)

for (i=1; i <= 50; i++) {
    if(i % 2 === 0){
        continue;
    } else if (i === userInput) {
        console.log("Yikes skipping: " + i);
    }else {
        console.log("Here is an odd number:" + i);
    }
}