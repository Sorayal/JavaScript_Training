"use strict;"
function printLine(){
    console.log("----------------------\n");
}

/*-------------------------------------------------------- */

// Basic function
function greeting(){
    console.log("Hello!");
}
// Function call
greeting();
printLine();

// Function with Parameters
function greetingWithName(name){
    console.log("Hello " + name);
}
greetingWithName("Mr. Anderson");
printLine();

function addNumbers(number1, number2){
    console.log(number1 + number2);
}
addNumbers(2,4);

// Global variables and scope
//Global variable: global scope
//+var randomGlobal1 = 20;
function randomFunction(){
    // only visible in function: localscope
    surname = "peter";
}




function output(){
    let output = "";
    if(typeof randomGlobal1 != "undefined"){
        output += "Global variable: " + randomGlobal1;
    }
    if(typeof surname != "undefined"){
        output += "Global variable: " + surname;
    }
    console.log(output);
}
output();
printLine();


// What will be returned?
let randomVar = "Hello";
function randomVarFunction(){
    let randomVar = "Ciao";
    console.log(randomVar);
}
randomVarFunction();

printLine();
// Returning values from a function

function returnPi(){
    let Pi = 3.141;
    return Pi;
}
console.log("Calling for Pi: " + returnPi());

printLine();

// returning Undefined, there is not return keyword
var sum = 1;
console.log(sum + "\n");
function changeSum(number){
    sum += number;
}
changeSum(5);
// Return value undefined
console.log(sum);
printLine();

// calling function via variable
function ciao(){
    return "Ciao!!";
}
// Declaring a constant and function assigned.
const callCiao = ciao();
console.log(callCiao);

printLine();

console.log(9 !== 9);

printLine();
// calling funct and assign return value

let solution = 0;
function processInput(param){
    return (param + 4) % 5;
}

solution = processInput(55);
console.log(solution);