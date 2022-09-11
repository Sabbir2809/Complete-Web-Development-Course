let customerName = 'Sabbir';
function displayCustomerName(){
    //function body
    console.log('Hello Mr/Mrs', customerName)
}
displayCustomerName();

/*
let firstNumber = 3;
let secondNumber = 7;

function calculateSum(){
    let result = firstNumber + secondNumber;
    console.log('Sum: ',result);
}
calculateSum();
*/

//Function Parameter, Argument Type
function calculateSum(firstNumber, secondNumber){
    let result = firstNumber + secondNumber;
    console.log('Sum: ',result);
}
calculateSum(9,8);
calculateSum(3, 7);


//Funtion Return type
function calculateSub(firstNumber, secondNumber){
    let result = firstNumber - secondNumber;
    return result;
}
let firstResult = calculateSub(99,1);
console.log('Sub: ',firstResult);


