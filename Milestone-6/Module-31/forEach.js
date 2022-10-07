const friends = ['Sabbir', 'Shafa', 'Sajia', 'Salkin', 'Mizan', 'Zafrin', 'Komol'];

friends.forEach(friend => 
  console.log(friend[0])  
);

const products = [
  {id: 1, name: 'Laptop', price: 50000},
  {id: 2, name: 'Mobile', price: 29000},
  {id: 3, name: 'Tablet', price: 20000},
  {id: 4, name: 'Watch', price: 5100},
];

products.forEach(p => console.log(p.name))