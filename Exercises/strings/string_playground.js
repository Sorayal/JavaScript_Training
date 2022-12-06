"use strict";
let randomString = "";

randomString = "Hello";
console.log(randomString.length);


function length(param){
    return param.length;
}

let secondString = "This is a longer sentence to check the length of this string.";

console.log(length(secondString));


randomString =  randomString.toUpperCase();
console.log(randomString);
randomString = randomString.toLowerCase();
console.log(randomString);

// Doubles Param and sets Delimiter between them.
function toCase(param){
    return param.toLowerCase() + "-" + param.toUpperCase();
}

console.log(toCase(randomString));