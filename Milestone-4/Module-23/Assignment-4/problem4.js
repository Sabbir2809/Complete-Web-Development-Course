// Problem-4: publicBusFare

function publicBusFare(numberOfPeople){
  
  if(typeof numberOfPeople === "number"){
    const busCapacity = 50;
    const microBusCapacity = 11;
    const publicBusFee = 250;

    let remainingBusPeople = numberOfPeople % busCapacity;
    let remainingMicroBusPeople = remainingBusPeople % microBusCapacity;
    let totalPublicBusFee = remainingMicroBusPeople * publicBusFee;

    return totalPublicBusFee;
  }
  // code that may throw an error
  else{
    console.log("This Input is Incorrect! Please provide a Valid Number");
  }
}

let publicBusFee = publicBusFare(365);
console.log(publicBusFee);