let example;
// Number to String 
example = String(55);
example = String(5 + 5);
example = String(19215);
console.log(typeof example);

// Date to String
example = String(new Date());
console.log(typeof example);

// Boolean to String
example = String(true);
console.log(typeof example);

//Array to String
example = String([1, 2, 3]);
console.log(typeof example);

//Another way with toString() method.
example = (555).toString();
console.log(typeof example);

//String to Number
example = Number("29");
console.log(typeof example);

//Boolean to Number
example = Number(true);
console.log(typeof example);

//Text to Number
example = Number("Hello JS");
console.log(typeof example);

//Another ways
example = parseInt("3.14161520");
console.log(example);

example = parseFloat("3.14161520");
console.log(example.toFixed(3));

//Automatic Type Convertion of JS
val1 = "6";
val2 = 6;
example = Number(val1 + val2);
console.log(example)