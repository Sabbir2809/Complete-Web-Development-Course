// 1. How to declare a variable using let & const
const fatherName = "Abdus Samad Khan";
let season = "rainy";
season = "winter";

// 2. Six basic Condition(>, <, <=, <= ===, !==, &&, ||)
if(true){
  
}else if(false){

}else if(false){

}else{

}

// 3. Array(indexOf(), length, push(), pop())
const numbers = [10, 20, 30, 40, 50];
numbers[0] = 5;

// 4. Loop(for, for...of, for...in, forEach)

for(let i = 0; i < numbers.length; i++){
  const number = numbers[i];  
}

// 5. Function
function multiply(num1, num2){
  const result = num1 * num2;
  return result;
}
const output = multiply(3, 3);


// 6. Object (three ways to access property by name)
const student = {
  name: "Sabbir Hossain",
  id: 2809,
  course: ["HTML", "CSS", "JavaScript"],
};
const myId = id;

console.log(student.name); // direct by property
console.log(student['age']); // access via property name string
console.log(student[myId]); // access via property name in a variable

