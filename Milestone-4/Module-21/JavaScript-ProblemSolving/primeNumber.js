//Check whether a number is a Prime Number or not

function isPrime(n){
    for(i = 2; i <= n-1; i++){
        // console.log(i, n % i);
        if(n % i == 0){
            return 'Not a Prime Number.';
        }
    }
    console.log('Prime Number.')
}

var result = isPrime(15);
console.log(result);