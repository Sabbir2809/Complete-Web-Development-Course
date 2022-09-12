// Assignment Operator VS Comparison Operator
let number = 24;
console.log(number == 24);


// Basic if Statement
if(number == 25){
    console.log("Yes..!");
}else{
    console.log("No..!");
}

// Comparison Operator: >, <, >=, <=, ===, and !==
/*
!true = false;
!false = true;
*/
let num = 17;
if(num >= 18){
    console.log("You are a Voter!");
}else{
    console.log("Yor are not a Voter! Basay jaw!");
}

// Difference Between == and ===
let nums = "34";
if(nums === "34"){ // Data + Data type comparison kore
    console.log("Yes! It's 34");
    console.log(typeof nums);
}

// Logical Operators: &&, ||, and !
let name = "Sabbir";
let age = 22;
let haveDgree = false;
let experience = 5;
if(haveDgree == true && experience >= 2){
    console.log(name + " You are capable to work here!");
}else{
    console.log("Sorry! Try again later");
}

if(haveDgree == true || age >= 18){
    console.log(name + " You are capable to work here!");
}else{
    console.log("Sorry! Try again later");
}

/*
=========== AND && ===========
    true + true = true
    true + false = false
    false + true = false
    false + false = false
===========OR || ===========
    true + true = true
    true + false = true
    false + true = true
    false + false = false
===========NOT ! ===========
    !true = false;
    !false = true;
*/