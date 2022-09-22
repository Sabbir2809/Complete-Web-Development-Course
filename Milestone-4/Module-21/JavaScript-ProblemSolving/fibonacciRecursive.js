/*
// Fibonacci Element in a Recursive Way
function Fibonacci(num){

    if(num == 0){
        return 0;
    }
    if(num == 1){
        return 1
    }
    else{
        return Fibonacci(num-1) + Fibonacci(num-2);
    }
}
var result = Fibonacci(10);
console.log(result);
*/

// Create Fibonacci series in a recursive way

function Fibonacci(n){
    if(n == 0){
        return [0];
    }
    else if(n == 1){
        return [0, 1];
    }
    else{
        var fibo = Fibonacci(n-1);
        var nextElement = fibo[n-1] + fibo[n-2];
        fibo.push(nextElement);
        return fibo; 
    }
}
var result = Fibonacci(10);
console.log(result);