// Calculate Factorial of a number using for loop
/*
function factorial(num){
    var factorial = 1;
    for(var i = 1; i <= num; i++){
        factorial = factorial * i;
    }
    return factorial;
}
var result = factorial(4);
console.log(result);
*/

var i = 1;
var fact = 1;
while(i <= 10){
    fact = fact * i;
    console.log(i, fact);
    i++;
}