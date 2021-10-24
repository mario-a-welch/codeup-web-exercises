"use strict";

(function () {
    //1.  Make a function called returnTwo() that returns the number 2 when called
    //Test this function with console.log(returnTwo())

    function returnTwo() {
        return 2;
    }

    console.log(returnTwo());

    //2.  Make a function called sayHowdy() which console.logs the string "Howdy!"
    //Test this function by directly calling sayHowdy() Remember this function does not need a defined return value

    function sayHowdy() {
        console.log("Howdy!");
    }

    sayHowdy();

    //3.  Make a function called returnName() that returns the string of your name.
    //Test this function with the console.log(returnName())

    function returnName() {
        return "Mario Welch";
    }

    console.log(returnName());

    //4.  Make a function called addThree() which takes in a number input and returns the number plus 3
    //Test this function with console.log(addThree(5))

    function addThree(num) {
        if(typeof num === "number") {
            return num + 3;
        }else {
            return false;
        }
    }

    console.log(addThree(5));
    console.log(addThree("Dog"));

    //5.  Make a function called sayString() which returns the string input passed in
    //Test this function with console.log(sayString('codeup'))

    function sayString(str) {
        if(typeof str === "string") {
            return str;
        } else {
            return false;
        }
    }

    console.log(sayString('codeup'));
    console.log(sayString(7));
})();