"use strict";

var jeff = "Jeff";
console.log(jeff);

console.log("Hello, I'm in my own file now!");

var returnOfAlert = alert("TGIF");
console.log(returnOfAlert); // when returning the alert value to the console, will always return undefined

var returnOfConfirm = confirm("Got any plans for this three day weekend?");
console.log(returnOfConfirm); // when returning the confirm value to the console, will return a boolean value

var returnOfPrompt = prompt("Whats your favorite new metal band?");
console.log(returnOfPrompt); // when returning the prompt value to the console, will return prompt message entered by user

var leastFavoriteSoda = prompt("What is your least favorite soda?");
var favoriteSoda = prompt("What's your favorite soda?");

alert("Hello fellow teens, my name is " + leastFavoriteSoda + "" + favoriteSoda + " and I choose hugs not drugs.");
