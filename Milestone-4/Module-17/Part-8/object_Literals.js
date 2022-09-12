// Object Declare
const person = {
    firstName: "Sabbir",
    lastName: "Hossain",
    age: 22,
    email: "sabbirto13@gmail.com",

    address: {
        city: "Manikganj",
        zipCode: 1820
    },

    getBirthYear: function(){
        return 1998 - this.age;
    }
};

let value;
value = person;

// Specific Value
value = person.firstName; // use korbo
console.log(value);

value = person["lastName"];
console.log(value);

value = person.age;
console.log(value);

value = person.address.city;
console.log(value);

value = person.address.zipCode;
console.log(value);

value = person.getBirthYear();
console.log(value);
console.log("\n");

// Array object
const people = [
    {name: "Sabbir", age: 21},
    {name: "Komol", age: 20},
    {name: "Salkin", age: 22},
];

for(let i = 0; i < people.length; i++){
    console.log(people[i].age);
}