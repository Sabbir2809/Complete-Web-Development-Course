// Calculate Factorial in a Recursive function

function factorial(num){
    
    if(num == 0){
        return 1;
    }else{
        return num * factorial(num-1);
    }
}

var ans = factorial(4);
console.log(ans);