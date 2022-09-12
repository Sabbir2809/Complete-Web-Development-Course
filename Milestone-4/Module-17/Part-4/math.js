let value;
let num1 = 10;
let num2 = 5;

// Simple Math
value = num1 + num2;
console.log(value);

value = num1 - num2;
console.log(value);

value = num1 * num2;
console.log(value);

value = num1 / num2;
console.log(value);

value = num1 % num2;
console.log(value);
console.log("\n");

// Precedent: *, /, +, -
value = 5 + 10 * 2;
console.log(value);
value = (5 + 10) * 2;
console.log(value);
console.log("\n");


// Math Object
value = Math.PI;
console.log(value);

value = Math.E;
console.log(value);

value = Math.round(2.57);
console.log(value);

value = Math.ceil(7.50);
console.log(value);

value = Math.floor(7.50);
console.log(value);

value = Math.sqrt(16);
console.log(value);

value = Math.pow(2, 8);
console.log(value);

value = Math.abs(-9);
console.log(value);

value = Math.min(16, 64, 32, 256);
console.log(value);

value = Math.max(16, 64, 32, 256);
console.log(value);

value = Math.floor(Math.random() * 100 + 1);
console.log(value);
