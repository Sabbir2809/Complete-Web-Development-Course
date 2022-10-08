const numbers = [33, 50, 79, 78, 90, 101, 30];

const bigNumbers = numbers.filter((num) => num > 20);
console.log(bigNumbers);

const ten = numbers.filter((num) => num % 10 === 0);
console.log(ten);

const products = [
  { id: 1, name: 'Laptop', price: 50000 },
  { id: 2, name: 'Mobile', price: 29000 },
  { id: 3, name: 'Tablet', price: 20000 },
  { id: 4, name: 'Watch', price: 5100 },
];

const expensive = products.filter((p) => p.price > 699999);
console.log(expensive);
