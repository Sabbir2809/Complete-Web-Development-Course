const products = [
  { name: "Laptop", price: 32000, brand: "DCL", color: "Silver" },
  { name: "Phone", price: 18000, brand: "Huawei", color: "Blue" },
  { name: "Watch", price: 1800, brand: "MI", color: "Black" },
  { name: "Sunglass", price: 700, brand: "Simple", color: "Black" },
  { name: "Camera", price: 5000, brand: "Samsung", color: "White" },
];

// 1. map(): return
const brands = products.map((product) => product.brand);
console.log(brands);
const prices = products.map((product) => product.price);
console.log(prices);

// 2. forEach(): No return
products.forEach((product) => {
  console.log(product.color);
});

// filter() - Group of Element
const cheap = products.filter((product) => product.price <= 2000);
console.log(cheap);

const specificName = products.filter((p) => p.brand.includes("S"));
console.log(specificName);

// find() - first Element
const special = products.find((p) => p.name.includes("S"));
console.log(special);

