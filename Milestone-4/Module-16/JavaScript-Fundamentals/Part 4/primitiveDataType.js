/*
==========Data Types==========

Primitive/Value Type:
    -string
    -number
    -boolean
    -undefined
    -null
    -symbol*

Reference Types:
    -object
    -array
    -function
*/

let customerName = 'Sabbir'; //String Literal
let firstName = String('Sabbir',); //Factory Function
let lastName = new String('Hossain'); //Constructor Function
console.log(typeof customerName);

let price = 24.45; //Number Literal
console.log(typeof price)

let unit = 3; //Number Literal
console.log(typeof unit)

let isNewCustomer = true; // Boolean Literal
console.log(typeof isNewCustomer);

let discount = null; //Object
console.log(typeof discount);

let name; // Undefined
console.log(typeof name);

// undefined == null --->true
// undefined === null --->false

let symbol1 = Symbol(); //big Number
let symbol2 = Symbol();