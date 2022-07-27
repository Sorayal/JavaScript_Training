"use strict";
const line = "\n-------------------\n";

let firstRegex = /test/;
let secondRegex = new RegExp("test");
let thirdRegex = /^test/; // ^ for begin of a string
let forthRegex = /test$/; // $ for end of a string

let randomString = "Hier sehen, Sie, ob sich in dieser Zeichenkette ein Substring test verbirgt";
let randomString2 = "test dir was";
let randomString3 = "teste";
console.log(line);

if(firstRegex.test(randomString)){
    console.log("Treffer");
}

if(thirdRegex.test(randomString)){
    console.log("Treffer am Anfang bei LangString");
}

if(thirdRegex.test(randomString2)){
    console.log("Treffer am Anfang bei test dir was.");
}

if(thirdRegex.test(randomString3)){
    console.log("Treffer am Anfang bei teste");
}