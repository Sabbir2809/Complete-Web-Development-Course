// :::::: Problem-1: radianToDegree ::::::
function radianToDegree(radian) {
  if (typeof radian === "number") {
    // Formula = Radian measure × (180°/π).
    let degree = radian * (180 / Math.PI);
    // toFixed() method rounds the string to a specified number of decimals
    let resultTwoPoinDecimal = degree.toFixed(2);
    // parseFloat() - returns a floating point number
    let finalResult = parseFloat(resultTwoPoinDecimal);
    return finalResult;
  }
  // code that may throw an error
  else{
    console.log("This Input is Incorrect, Please provide a valid Number");
  }
}



// :::::: Problem-2: isJavaScriptFile ::::::
function isJavaScriptFile(fileType){
  // code that may throw an error
  if(typeof fileType === "number"){
    return console.log("This Input is Incorrect! Please provide a Valid String");
  }
  // true, This is a JS file
  if(fileType.toLowerCase().endsWith(".js")){
    return true;
  }
  // false, this is a JS file.
  else{
    return false;
  }
}



// :::::: Problem-3: oilPrice ::::::
function oilPrice(dieselQuantity, petrolQuantity, octaneQuantity) {
  if ((typeof dieselQuantity === 'number') && (typeof petrolQuantity === 'number') && (typeof octaneQuantity === 'number')) {
    const dieselPrice = 114 * dieselQuantity;
    const petrolPrice = 130 * petrolQuantity;
    const octanePrice = 135 * octaneQuantity;
    // Total Oil Price
    const totalOilPrice = dieselPrice + petrolPrice + octanePrice;
    
    return totalOilPrice;
  }
  // code that may throw an error
  else {
    console.log("This Input is Incorrect! Please provide a Valid String");
  }
}



// :::::: Problem-4: publicBusFare ::::::
function publicBusFare(numberOfPeople){
  // Calculate Total Public Bus Free
  if(typeof numberOfPeople === "number"){
    const busCapacity = 50;
    const microBusCapacity = 11;
    const publicBusFee = 250;
    // remaining People Bus & MicroBus
    let remainingBusPeople = numberOfPeople % busCapacity;
    let remainingMicroBusPeople = remainingBusPeople % microBusCapacity;
    // Calculate Total Public Bus Fee
    let totalPublicBusFee = remainingMicroBusPeople * publicBusFee;

    return totalPublicBusFee;
  }
  // code that may throw an error
  else{
    console.log("This Input is Incorrect! Please provide a Valid Number");
  }
}



// :::::: Problem-5: isBestFriend ::::::
// Problem-5: isBestFriend
function isBestFriend(f1, f2){
  // true condtion and Error handling
  if(typeof f1 === "object" && typeof f2 === "object"){
    if((f1["name"].toLowerCase() === f2["friend"].toLowerCase()) && (f2["name"].toLowerCase() === f1["friend"].toLowerCase())){
      return true;
    }
    // false condtion
    else{
      return false;
    }
  }
  // code that may throw an error
  else{
    console.log("This Input is Incorrect! Please provide a Valid Object");
  }
}