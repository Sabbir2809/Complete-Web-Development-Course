// Problem-2:
function isJavaScriptFile(type){
  // code that may throw an error
  if(typeof type === "number"){
    return console.log("This Input is Incorrect! Please provide a Valid String");
  }
  // True Condition
  if(type.toLowerCase().endsWith(".js")){
    return true;
  }
  // False Condition
  else{
    return false;
  }
}

let fileType = isJavaScriptFile('image.jpg.js');
console.log(fileType);