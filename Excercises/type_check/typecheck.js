"use strict";
const line = "\n------------------------\n";

let randomVariable = "30";
let randomNumber = Number(randomVariable);

// returns what datatype is used and what value is saved.
console.log(typeof(randomVariable) + " : "+ randomVariable);
console.log(typeof(randomNumber) + " : "+ randomNumber);

console.log(line);
// Check if is not a number

let boolVariable = isNaN(randomVariable);
let boolNumber = !isNaN(randomNumber);

console.log(boolVariable);


if(!isNaN(randomNumber)){
    console.log("Variable ist eine Zahl");
}