/*==========Love Calculator==========*/

//Persons Name
let firstName = prompt("What is your Name?");
let partnerName = prompt("What is your partner name?");

// Calculation
let number = Math.random() * 100;
number = Math.floor(number) + 1;

// Showing Result
alert(firstName + " and " + partnerName + "'s love percentage: "+ number + "%");