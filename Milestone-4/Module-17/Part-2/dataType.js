//Data Type in JavaScript
/*
    1.Primitive Data Types:
        -Boolean
        -Number
        -String
        -Null
        -Symbol
        -Undefined

    2.Complex Data Types:
        -Object
*/


//Boolean
let val1 = true;
console.log(typeof val1);

//Number
let num = 45;
console.log(typeof num);

//String
let text = "Hello World!";
console.log(typeof text);

//Null
let sampleVar = null;
console.log(typeof sampleVar);// Due to bug it shows object

//Symbol
let val2 = Symbol();
console.log(typeof val2);

//Undefined
let val3 = undefined;
console.log(typeof val3);


//Object 
let obj = {
    name: "Sabbir",
    age: 45
}
console.log(typeof obj);

//Array
let arr = ["Dhaka", "Manikganj"];
console.log(typeof arr);