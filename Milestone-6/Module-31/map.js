const numbers = [1, 3, 5, 7, 9];

const even = numbers.map((e) => {
  return e + 1;
});
console.log(even);

const friends = ['Sabbir', 'Shafa', 'Sajia', 'Salkin', 'Mizan', 'Zafrin', 'Komol'];

const friendLetters = friends.map((friend) => friend[0]);
console.log(friendLetters);

const nameLengths = friends.map((friend) => friend.length);
console.log(nameLengths);

const products = [
  { id: 1, name: 'Laptop', price: 50000 },
  { id: 2, name: 'Mobile', price: 29000 },
  { id: 3, name: 'Tablet', price: 20000 },
  { id: 4, name: 'Watch', price: 5100 },
];

const items = products.map((p) => p.price);
console.log(items);
