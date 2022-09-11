let carBrand = 'Audi';
let carColor = 'Yellow';
let carModel = 'A4';
let carPrice = 45000;

let car = {
    brand: 'Audi',
    color: 'Yellow',
    model: 'A4',
    price: 45000

};
car.brand = 'TaTa';
console.log(car.brand);
let selectedOption = 'color'
console.log(car[selectedOption]);
