// What is JavaScript Loop?
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);

for(let i = 0; i < 10; i++){
    console.log(i);
}
console.log("\n");


// for Loop
for (let i = 10; i > 0; i--) {
    if(i === 5){
        break;
    }
    if(i === 10){
        continue;
    }
    console.log(i);
}
console.log("\n");

let myArray = ["one", "two", "three", "four", "five", "six"];
for (let i = myArray.length-1; i >= 0; i--) {
    console.log(myArray[i]);
    
}


// while Loop
let i = 10;
while (i > 0) {
    console.log(i);
    i--;    
}
/*
// for VS while
let myPrompt = Number(prompt("Enter a Number: "));
console.log(typeof myPrompt);

while (myPrompt < 10) {
    alert("Please Enter a larger number");
    let myPrompt = Number(prompt("Enter a Number: "));
    console.log(typeof myPrompt);
}
if(myPrompt >= 10){
    alert("Congratulations!");
}
*/


// do..while Loop
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 10);


// forEach Loop
let myArray = ["one", "two", "three", "four", "five", "six"];

Array.forEach(function(element){
    console.log(element);
})


// Execution Time
let num = 10000000;
let myArray = new Array(num);

console.time("for");
for(let i = 0; i < num; i++){
    console.timeEnd("for")
}

console.time("while");
while(i < num){
    console.timeEnd("while")
}