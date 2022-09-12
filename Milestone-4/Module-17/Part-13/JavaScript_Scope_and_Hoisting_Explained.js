// Global Variable - Global Scope
var globalVar = "I am Global"; // Global Scoped


// Local Variable - Function Scope
function any(){
    var localVar = "I am Local"; // Local Scoped
    // console.log(localVar);
    // console.log(globalVar);

    if(true){
        let insideIF = "I am inside If";
        console.log(insideIF);
    }
    // console.log(insideIF);
    if(true){
        var insideIF = "I am inside If";
        console.log(insideIF);
    }
}
any();
//console.log(insideIF);


// Hoisting
var hoistingTest = "Hoisting Test";
function hoisting(){
    var hoistingTest;
    console.log(hoistingTest);
    hoistingTest = "Hoisting Test";
    console.log(hoistingTest);
}
hoisting();


// Use of let
function letTest(){
    let localvar = 30;

    if(true){
        let insideIf = "Insite if"; // Block Scoped
        console.log(insideIf);
    }
    if(true){
        let insideIf = "New Inside If";
        console.log(insideIf);
    }
}
letTest();


// Use of const

const PI = 3.1416;
//PI = 4;
console.log(PI);
