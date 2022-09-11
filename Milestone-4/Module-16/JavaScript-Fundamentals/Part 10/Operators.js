/*
If you can print it or assign it to a variable. It's an Expression.If you can't it's a statement.
*/

/*==========Arithmatic Operators==========*/
let firstNumber = 15;
let secondNumber = 2;

//Addition Operator
console.log(firstNumber + secondNumber);

//Subtraction Operator
console.log(firstNumber - secondNumber);

//Multiplication Operator
console.log(firstNumber * secondNumber);

//Division Operator
console.log(firstNumber / secondNumber);

//Modulus Operator(Remainder of Division)
console.log(firstNumber % secondNumber);

//Exponentiation
console.log(firstNumber ** secondNumber);

/*==========Assignment Operators==========*/

//Increment
firstNumber++;
console.log(firstNumber);
++firstNumber;
console.log(firstNumber);

console.log(firstNumber++);
console.log(++firstNumber);

//Decrement
secondNumber--;
console.log(secondNumber);
--secondNumber;
console.log(secondNumber);

console.log(secondNumber++);
console.log(++secondNumber);

//firstNumber = firstNumber + 5;
firstNumber += 5;
console.log(firstNumber);


/*==========Comparison Operators==========*/

let num1 = 5;
let num2 = 10;

//Relational Operator
console.log(num1 >= num2);
console.log(num1 <= num2);

//Equality Operator
//Strict Operator : value + Type
console.log(2 == 2);
console.log(2 === '2');
console.log(4 !== 4);
console.log("\n");


/*==========Ternary Operators==========*/
let totalMark = 800;
let minimumMarkRequired = 750;

let canGetAdmission = totalMark > minimumMarkRequired ? 'Yes' : 'No';
console.log(canGetAdmission);
console.log("\n");


/*==========Logical Operators==========*/

let maths = 86;
let physics = 80;
//and
let canTakeAdmission = (maths > 85 && physics > 75);
console.log(canTakeAdmission);

//or
let orAdmission = (maths > 85 || physics > 85);
console.log(orAdmission);

//not
console.log(!orAdmission);


/*Falsly Value:
       -undefined, null, '', 0, null(Not a Number)
*/


/*==========Bitwise Operators==========*/
console.log(1 | 2);
console.log(1 & 2);

/*==========Operator Precedence==========*/
console.log(2 + 3 * 6 / 3);