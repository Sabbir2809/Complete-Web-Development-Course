// 1. let, const
let numbers = [10, 20, 30, 40, 50];

const student = {
  name: "Sabbir Hossain",
  id: 2809,
  language: ["HTML", "CSS", "JavaScript"],
};

// 2. Template String
const aboutMe = `This is ${student.name} Here. My Student ID is ${student.id}. Course ${student.language[2]}`;
console.log(aboutMe);

// 3. Arrow function
const getFiftyFive = () => 55;
const addSixtyFive = (num1) => num1 + 65;
const isEven = (x) => x % 2 == 0;
const addThree = (x, y, z) => x + y + z;
const doMath = (num1, num2) => {
  const sum = num1 + num2;
  return sum;
};

// 4. Spread Operator
const newNumbers = [...numbers];
const currentNumber = [...numbers, 60, 70, 80];

numbers.push(90);
numbers.push(100);

console.log(numbers); // old array
console.log(newNumbers); // new array
console.log(currentNumber); // current array

