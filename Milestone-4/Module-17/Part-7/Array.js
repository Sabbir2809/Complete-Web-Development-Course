//Array Decelare Rules:
const numbers1 = [8, 16, 32, 64 ,256];
const numbers2 = new Array(5, 10, 20, 30);
const color = ["red", "yellow", "green", "orange"];
const mixed = [25, "hello", true, undefined, null, {a:1, b:2}, new Date()];

let value;
value = mixed.length;
console.log(value);

value = Array.isArray(color);
console.log(value);

// numbers1[0] = 100;
value = numbers1.indexOf(64);
console.log(value);

// Mutating Array
numbers1.push(300);
console.log(numbers1);
numbers1.unshift();//First Element add
console.log(numbers1);
numbers1.shift(); //First Element Delete
console.log(numbers1);
numbers1.pop();
numbers1.splice(1, 1);
console.log(numbers1);

numbers1.reverse();

value = numbers1.concat(numbers2);

value = color.sort();


function over50(num){
    return num > 50;
}
value = numbers1.find(over50);

//Output
console.log(numbers1);
console.log(value);



