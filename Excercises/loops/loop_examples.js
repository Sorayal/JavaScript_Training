"use strict";
const line = "\n-----------------\n";


// For - loop , used when you know how often you have to iterate
// setup var i = 1, check condition: i<=20, change: i++
for(var i = 1; i <= 20; i++){
    console.log(i + ". iteration");
}

console.log(line);
// While - loop, used when you don´t know how often you have to iterate
// top controlled, means the condition to run the loop will be checked first

var i = 1; // setup

while(i <= 10){ // check
    console.log(i + ". iteration");
    i++; // change
}

console.log(line);
// Do -While loop, nearly the same like While, but it will run at least
// once through the loop and check the condtion at the end of current iteration.

i = 1; // setup
do{
    console.log(i + ". iteration");
    i++; // change
}while(i <=10); // check