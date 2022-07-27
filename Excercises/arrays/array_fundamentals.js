"use strict";

// these arrays are not typesafe.
let exampleArray = ["randomString" , 8];

// Nested arrays
let nestedExampleArray = [ ["randomString", "newString"] , [8,9,0]];

console.log(exampleArray[1]);
console.log("****************");
// go into the first nested Array and grab the second element
console.log(nestedExampleArray[0][1]);

console.log("****************");
// Array length
console.log(exampleArray);
console.log(nestedExampleArray);
console.log("Length of exampleArray: " + exampleArray.length);
console.log("Length of the array nestedExampleArray: " + nestedExampleArray.length); // Length of main array
console.log("Length of the second nested array: " + nestedExampleArray[1].length); // Length of sub/nested array.
console.log("****************");

// Simple Jagged Array
let jaggedExampleArray = [
    [1,3,4],
    [4,5,88,8,9],
    [1,3],
    5
];
// getting the single number
console.log(jaggedExampleArray[3]);
// Getting 88;
console.log(jaggedExampleArray[1][2]);
console.log("****************");

// Appending values to an array via push function
let numbersArray = [1,2,3,4,5,6,7,8];
console.log(numbersArray);
numbersArray.push(9,0);
console.log(numbersArray);
let stringsArray = ["Hello"," ","World"];
console.log(stringsArray);
stringsArray.push("!!", ["subString1","subString2"]);
console.log(stringsArray);
console.log("****************");

// Counter function for push is pop() which takes the last element
// of an array away
console.log(numbersArray);
let NumberDeleted = numbersArray.pop();
console.log(numbersArray);

console.log(stringsArray);
let stringDeleted = stringsArray.pop();
console.log(stringsArray);

// Test for error when array is empty
let zeroArray = [];
console.log(zeroArray);
zeroArray.pop();
console.log(zeroArray);

// taking the first item from an array
let fullArray = [1,2,3,4,5,6,7,8,9,0];
console.log(fullArray);
fullArray.shift();
console.log(fullArray);

for(var i = fullArray.length; i >= 0; i--){
    fullArray.shift();
    console.log(i);
}
console.log(fullArray);

// Unshift operation for arrays to put elements at the front
fullArray.unshift(1,2);
console.log(fullArray);