// Problem-1 
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
