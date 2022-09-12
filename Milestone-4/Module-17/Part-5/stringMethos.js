let str1 = "First course of this course channel is about JavaScript"; 
let str2 = " and we will learn more things too.";

// charAt()
console.log(str1.charAt(0));
// charCodeAt()
console.log(str1.charCodeAt(0));
// concat()

console.log(str1.concat(str2));
// endsWith()
console.log(str1.endsWith("JavaScript"));
// fromCharCode()
console.log(String.fromCharCode(114));
// includes()
console.log(str1.includes(this));

// indexOf()
console.log(str1.indexOf("course"));
// lastIndexOf()
console.log(str1.lastIndexOf("course"));

// match()
console.log(str1.match(/course/g));
// repeat()
console.log(str2.repeat(2));
// replace()
console.log(str1.replace(/course/g, "Lessons"));
// search()
console.log(str1.search("JavaScript"));

// slice()
console.log(str1.slice(45,55));
// split()
console.log(str2.split(" "));

// toUpperCase()
console.log(str1.toUpperCase());
// toLowerCase()
console.log(str2.toLocaleLowerCase());
