// map, forEach, filter, find, reduce
const numbers = [1, 9, 17, 22];

const total = numbers.reduce((previous, current) => previous + current, 0);
console.log(total);

const result = numbers.reduce((p, c) => {
  console.log(p, c);
  return p + c;
}, 0);

const people = [
  { name: 'Meena', age: 20 },
  { name: 'Rina', age: 15 },
  { name: 'Suchorita', age: 22 },
];

const age = people.reduce((p, c) => {
  return p + c.age;
}, 0);

console.log(age);
