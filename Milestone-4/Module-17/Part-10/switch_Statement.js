// if VS switch

let text;
let rollNumber = 6;

if(rollNumber === 1){
    text = "Congratulations! You are first.";
}else if(rollNumber === 2){
    text = "Congratulations! But you can do batter.";
}else if(rollNumber === 3){
    text = "Third is not bad!";
}
console.log(text);

// switch Statement Basic

switch(rollNumber){
    case 1:
        text = "Congratulations! You are first.";
        break;
    case 2:
        text = "Congratulations! But you can do batter.";
        break;
    case 3:
        text = "Third is not bad!";
        break;
    default:
        text = "what is your roll?"
}
console.log(text);

// Use of break;
switch(rollNumber){
    case 1:
        text = "Congratulations! You are first.";
        break;
    default:
        text = "what is your roll?"
}
console.log(text);

// Grouping cases
let color = "cyan";
switch(color){
    case "red":
    case "green":
    case "blue":
        console.log("You have selected RGB color");
        break;
    
        case "cyan":
        case "magenta":
        case "yellow":
        case "black":
            console.log("You have selected CMYK color.");
            break;
}