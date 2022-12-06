"use strict";
const line = "---------------";
let colorPalette = ["blau", "gelb", "rot"];
let indexNumber = Math.floor(Math.random() * colorPalette.length);
let color = colorPalette[indexNumber];

switch(color){
    case "blau":
        console.log("Die Farbe Blau wurde gewaehlt.");
        break;
    case "gelb":
        console.log("Die Farbe Gelb wurde gewaehlt.");
        break;
    case "rot":
        console.log("Die Farbe Rot wurde gewaehlt.");
        break;
    default:
        console.log("Keine gueltige Farbe");
}