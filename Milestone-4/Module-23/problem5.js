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

