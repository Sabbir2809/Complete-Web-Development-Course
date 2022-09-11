/*
    Variable Naming Convertion
        -Give a meaningful name
        -Use camel case for variable name.For Example: firstName
        -Cannot start with a number.For Example: 1stNumber
        -Cannot contain a space or hyphen.For Example: var first Number = 32; var second-number = 34;
*/

// var Variable use - প্রথমেই বলতে পারি let কিছুটা var এর মতোই। কিন্তু const একটু অন্যরকম। যেমন আমরা চাইলে var দিয়ে একটা ভ্যারিয়েবল ডিক্লেয়ার করে পরবর্তিতে আমরা চাইলে সেটার ভ্যালু চেঞ্জ করতে পারি, যেটা let এর ক্ষেত্রেও পুরোপুরি সম্ভব।
var firstNumber;
firstNumber = 12;
console.log(firstNumber);

var FirstNumber = 24;
console.log(firstNumber,FirstNumber);

// let Variable use - 
let num1 = 64;
let num2 = 32;
let sum = num1 + num2;
console.log(sum);

let a, b, add;
a = 32;
b = 44;
add = a + b;
console.log(add);

// const Variable use - const মানে কন্সট্যান্ট, যার ভ্যালু চেঞ্জ করা যায় না। তাই আপনি কোনোকিছু একবার const দিয়ে ডিক্লেয়ার করলে সেটার পরে আর পরিবর্তন করতে পারবেন না। করতে চাইলে এরর আসবে।

const  pi = 3.1416;
console.log(pi);
/*
pi = 4;
console.log(pi);

const pi;
pi = 3.1416;
console.log(pi;
*/


