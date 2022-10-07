const numbers = [33, 50, 79, 78, 90, 101, 30];

const ten = numbers.find(n => n % 10 === 0);
console.log(ten);

const tens = numbers.filter(num => num % 10 === 0);
console.log(tens);