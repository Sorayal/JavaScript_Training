"use strict"; // Activate strict mode.

let nameLength = 0;
let testName = "Peter Agile";
console.log("The length is: " + testName.length); // calling property length

let firstChar = testName[0];
console.log("The first char of test name is: " + firstChar);

// strings are immutable. So changing explicit chars within an
// existing string is not possible.
// The following line throws an error
// testName[0] = "A";

// This works
testName = "Pit Agile";

// Finding last char of a string
// It calls the property length at first, decrements 1
// and looks at the last char of the string
// Forgetting to decrement will return with an undefined
console.log(testName[testName.length - 1]);