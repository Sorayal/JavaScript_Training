"use strict";
const line = "--------------";
let randomNumber = 0;

// returns pseudorandom number between 0 and 99
randomNumber =  Math.floor(Math.random() * 100);

//returns 1 or 0
function getRandomInt(maxLimit){
    return Math.floor(Math.random() * maxLimit);
}

console.log(randomNumber);
console.log(line);


if(randomNumber > 50){
    console.log("if executed");
}
else{
    console.log("else executed");
}

console.log(line);

randomNumber = getRandomInt(2);
if(randomNumber == 1){
    alert("1");
}
if(randomNumber == 0){
    alert("0");
}