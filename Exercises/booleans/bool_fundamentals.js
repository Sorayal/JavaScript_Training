// boolean is another datatype which can contain true or false
"use strict";
const line = "**********************";


function trueOrFalseCheck (param){
    if(param){
        return "param shows true";
    }
    else{
        return "param shows false";
    }
}

console.log(line + "\n");

// Simple check if expression is true
console.log(trueOrFalseCheck(1==1));
console.log(trueOrFalseCheck(-1==7));

function valueEqualityCheck(param){
    if (param == '60'){
        return "parameter is equal 60";
    }
    else{
        return "parameter is not equal 60";
    }
}
// it checks the value, not the datatype, so 60 is equal '60'
// Performs a type conversion

console.log(valueEqualityCheck(60));
console.log(line + "\n");


function valueStrictEqualityCheck(param){
    if (param === '60'){
        return "parameter is equal to '60'";
    }
    else{
        return "parameter is not equal to '60'";
    }
}
// Doesnt convert the type like the normal Equality Operator
// Checks value and datatype

console.log(typeof(60) + ':' + valueStrictEqualityCheck(60));
console.log(typeof('60') + ':' +  valueStrictEqualityCheck('60'));
console.log(line + "\n");

// The same difference is between the normal Inequality operator and the strict
// Inequality operator
function inEqualityCheck(firstParam, secondParam){
    if(firstParam != secondParam){
        return "First parameter is not equal to the second parameter";
    }
    else{
        return "First paramenter is equal to the second paramenter";
    }
}

console.log("1 != true ? : " + inEqualityCheck(1,true));
console.log("0 != false ? : " + inEqualityCheck(0,false));
console.log(line + "\n");

function inEqualityStrictCheck(firstParam, secondParam){
    if(firstParam !== secondParam){
        return "First parameter is not equal to the second parameter";
    }
    else{
        return "First paramenter is equal to the second paramenter";
    }
}

console.log("1 != true ? : " + inEqualityStrictCheck(1,true));
console.log("0 != false ? : " + inEqualityStrictCheck(0,false));
console.log(line + "\n");


// Greater Than Operater and Less Than Operator , both convert data types

console.log("Is 10 greater than  -9 ? " + (10 > -9));
console.log("Is 10 less than  11 ? " + (10 < 11));
console.log("Is 10 less or equal than  10 ? " + (10 <= 10));
console.log(line + "\n");

// And and Or-Operator
console.log("Is 60 between 59 and 61 ? :" + (60 > 59 && 60 < 61));
let randomList = [ 'Pie', 'Apple', 'Peach' ];

randomList.forEach(function(element){
    if(element == 'Pie' || element == 'Peach'){
        console.log("List contains Pie and Peach");
    }
    else{
        console.log("List does not contains Pie and Peach");
    }
});