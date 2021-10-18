"use strict"

function showMultiplicationTable(num) {
    for(var i = 1; i <= 10; i++) {
        console.log(num + " x " + i + " = " + (num*i));
    }
}
showMultiplicationTable(7);



for(var i = 1; i <= 10; i++) {
    var randomNum = Math.floor(Math.random() * (200 - 20 + 1) ) + 20;
    // Creates random variable with a min and max: Math.floor(Math.random() * (Max-Min+1)) + Min

    if (randomNum % 2 == 0){
        console.log(randomNum + " is even");
    } else {
        console.log(randomNum + " is odd");
    }
}

for(var a = 1; a <= 9; a++) {
    for(var b = 1; b <= a; b++) {
        console.log(a);
    }
}

for(var c = 100; c > 0; c-=5) {
    console.log(c)
}