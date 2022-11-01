// 1. JSON (stringify, parse)
const student = {
  name: "Sabbir Hossain",
  id: 2809,
  language: ["HTML", "CSS", "JavaScript"],
};
console.log(student);
// JSON.stringify()
const studentJSON = JSON.stringify(student);
console.log(studentJSON);
// JSON.parse()
const studentObj = JSON.parse(studentJSON);
console.log(studentObj);

// 2. fetch()
// fetch()
//   .then((res) => res.JSON())
//   .then((data) => console.log(data));

// 3. Keys, Value
const keys = Object.keys(student);
console.log(keys);
const values = Object.values(student);
console.log(values);

// forEach - no return
// map - return
// for...of on array like object
// loop on an object using for...in
const numbers = [1, 9, 2, 5, 8, 0, 9];
numbers.forEach((num) => console.log(num));


// add or remove from an array
const products = [
  { name: "Laptop", price: 32000, brand: "DCL", color: "Silver" },
  { name: "Phone", price: 18000, brand: "Huawei", color: "Blue" },
  { name: "Watch", price: 1800, brand: "MI", color: "Black" },
  { name: "Sunglass", price: 700, brand: "Simple", color: "Black" },
  { name: "Camera", price: 5000, brand: "Samsung", color: "White" },
];

const newProduct = { name: "Webcam", price: 3000, brand: "Logitech" };
// copy products array & then add newProduct
const newProducts = [...products, newProduct];
console.log(newProducts);

// create a new array without one specific item
// remove phone means create a new array without the array
const remaining = products.filter(product => product.name !== 'Phone');
console.log(remaining);


