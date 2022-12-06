"use strict";

function nextInLine(array, item){
    array.push(item);
    item = array.shift();
    return item;
}

let testInput = [1,2,3,4,5,6,7,8,9,10];


console.log("Before: " + JSON.stringify(testInput));
let solution = nextInLine(testInput,11);
console.log("After: " + JSON.stringify(testInput));

//console.log(testInput);
//console.log(solution);