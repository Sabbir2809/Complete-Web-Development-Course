const number = 23;

if (typeof number === 'number') {
  console.log('Value is a Number');
} else {
  console.log('Value is Not a Number');
}

const numbers = [1, 9, 2];
const student = {
  name: 'Sabbir Hossain',
  age: 22,
};

console.log(typeof numbers);
console.log(typeof student);
console.log(Array.isArray(numbers));
console.log(Array.isArray(student));
