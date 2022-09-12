// ES2015 or ES6
// Variable create: var, let, const

//var: function scoped
var firstName = 'Sabbir';
console.log(firstName);

firstName = "Sabbir Hossain";
console.log(firstName);

var number = 2809;
console.log(number);

//let: global scoped
let age = 22;
age = 21;
console.log(age);


//const
const city = 'Singair';
//city = "Shahorail";
console.log(city);

//input System:
/* 
let input = prompt('What is your name?');
alert('Hello', input);
*/

let address;
address = 'Manikganj';
console.log(address);

//Variable naming convension: letter, number,_ , $
//Variable name can not start with number.
let name;
var problems99;
console.log(problems99);

let greetings = 'Hello';
console.log(greetings);

//
let firstNames; //Camel Case -- Suggested
let first_names; //underscore
let FirstNames; //Pascal Case: object, constructor, function, ES6, class

//Array
const info = ["Manikganj", "Singair", 1820];
info.push(9);
console.log(info);

