// Function Declaration
function adder(a, b){ //Parameters
    console.log(a + b);
}
adder(10, 25); //Arguments



// Local Variables
function greet(){
    let userName = "Sabbir"; //Local variable
    console.log("Hello "+userName);
}
greet();
//console.log(userName);



// Global Variables
let names = "Sabbir"; // global variable
function greets(){
    console.log(names);
}
greets();



// Parameters and it's evloution
function test(a = "Sabbir", b = "-Hossain"){
    // if(typeof a === "undefined"){
    //     a = "Sabbir";
    // }
    // if(typeof b === "undefined"){
    //     b = "-Hossain";
    // }
    console.log("Hello, "+ a + b);
}
test();



// Returning a value
function calcSquare(x){
    return x*x;
}
let squareNumber = calcSquare(5);
console.log(squareNumber);


// Naming Function(get, set, calc, create, check)
function getValue(){

}
function setValue(){

}
function createUser(){

}
function checkValue(){

}



// Immidiatley Invokable Function Expressions-IIFEs
(function(name){
    console.log(name);
})("Tabbu");
