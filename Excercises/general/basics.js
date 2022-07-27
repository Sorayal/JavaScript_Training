// @ts-check

//This is a single line comment
/*This can be a multiline
comment */

/* datatypes of JavaScript
1. undefined  // will be passed by value
2. null // value
3. boolean // value
4. string // value
5. symbol //value datatype
6. bigint // value
7. number  // value
8. function // reference datatype
8. object // reference datatype
9. array // reference datatype
*/

//using variable
// let is block scoped, var is not block scoped
// it means it´s also visible outside of a programming block

//Deklaring variables
var surName;
let fullName;

// Initialize them
surName = "Peter";
fullName = "Peter Müller";

const players = ["Sam","Sarah","Ryan","Poppy"];
const teams = players;
console.log(players, teams);
players[3] = "Blaubart";
console.log("\n");
console.log(players, teams);
console.log("*******")

// Incrementing and Decrementing numbers
let a = 30;
let b = 30;

a++;
b--;
console.log(a); //31
console.log(b); //29
console.log("*******")

// Compound Assignment
a +=4;
b -=5;
console.log(a); //35
console.log(b); //24
console.log("*******")

// strings
let firstString = "It´s the first";
let secondString = "time ever";
// Escape Sequence
let escapeString = "I am an \"escaped string\"";
// Combination of one quoted and double quoted string
let aTagExample = '<a href="http://www.example.com" target="_blank">Link</a>';
console.log(aTagExample);

// Concate strings and variables
let adjective = "fun!";
let programmerString = "Learning to code is ";
programmerString += adjective;
console.log("Hello " + programmerString + "\n+++++++++++++++++++++\n");




// Functions
function hello(){
    return "Hello Universe!";
}

console.log(hello()); // calls the function
console.log(hello); // calls the reference hello which contains the function