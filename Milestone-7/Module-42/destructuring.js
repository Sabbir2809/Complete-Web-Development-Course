// 1. Array De-structuring
const numbers = [50, 100];
const [x, y] = numbers; // const [x, y] = [50, 100];
console.log(x, y);

function boxIfy(num1, num2) {
  const array = [num1, num2];
  return array;
}
console.log(boxIfy(10, 20));


// 2. Object De-structuring
const { name, age, id } = { name: "Zarin", age: 23, id: "192-15-13115" };
console.log(name, age, id);

const employee = {
  IDE: "VS Code",
  designation: "Develoer",
  machine: "Windows",
  language: "JavaScript",
  specification: {
    height: 160,
    weight: 50,
    address: "Nabinagar",
  },
};
// Simple Object
const {IDE, language}= employee;
console.log(IDE, language);
// Object & Object
const {height, weight} = employee.specification;
console.log(height, weight);
