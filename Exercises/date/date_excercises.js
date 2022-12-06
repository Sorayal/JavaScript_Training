"use strict";
const line = "*************************";

//const todayDate = new Date().toUTCString();
const todayDate = new Date();
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
const currentDay = todayDate.getDate();
const currentMonth = todayDate.getMonth() + 1;
const currentFullYear = todayDate.getFullYear();

// Other declaration
let [date, month, year] = new Date().toLocaleDateString("de-DE").split(".");

console.log("Date today: " + currentDay + "." + currentMonth + "." + currentFullYear);

console.log(date + "." + month + "." + year);
console.log(line);

console.log(new Date().toLocaleDateString("de-DE"));