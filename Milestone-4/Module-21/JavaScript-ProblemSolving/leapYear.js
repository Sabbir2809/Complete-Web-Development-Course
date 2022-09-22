// check whether a year is a Leap Year or not
function isLeapYear(input){

    let year = input;

    if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){
        return true;
    }else{
        return false;
    }
}

let check = isLeapYear(366);
console.log(check);