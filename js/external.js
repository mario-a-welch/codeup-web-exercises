"use strict";

console.log("Hello from external JavaScript");

alert("Welcome to my Website!");

var favoriteColor = prompt("What is your favorite color?");
alert("Great, " + favoriteColor + " is my favorite color too!");

var littleMermaid = prompt("How many days did you rent Little Mermaid for?");
var brotherBear = prompt("How many days did you rent Brother Bear for?");
var hercules = prompt("How many days did you rent Hercules for?");
var costOfMovie = prompt("How much was the movie per day?");

alert("Your final cost is: " + ((Number(littleMermaid) + Number(brotherBear) + Number(hercules)) * Number(costOfMovie)  ));

var google = prompt("How much are you getting paid by Google?");
var googleHours =  prompt("How many hours did you work for Google?");
var googlePmt = Number(google) * Number(googleHours);
var amazon = prompt("How much are you getting paid by Amazon?");
var amazonHours = prompt("How many hours did you work for Amazon");
var amazonPmt = Number(amazon) * Number(amazonHours);
var faceBook= prompt("How much are you getting paid by Facebook?");
var faceBookHours = prompt("How many hours did you work for Facebook");
var faceBookPmt = Number(faceBook) * Number(faceBookHours);

alert("You will receive $" + (googlePmt + amazonPmt + faceBookPmt) + " for this week!" );

var classFull = confirm("Is the class full?");
var conflict = confirm("Does the class conflict with your schedule?");
var result = !classFull && !conflict;

alert("Are you enrolled in the class? " + (result.toString()).toUpperCase());


