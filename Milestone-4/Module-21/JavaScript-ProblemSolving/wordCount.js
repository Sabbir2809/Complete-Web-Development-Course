// Count the number of words in a string

var speech = "I  am good person. I don't  snore at night. ";
var cout = 0;
for(var i = 0; i < speech.length; i++){
    var char = speech[i];
    if(char == " " && speech[i-1] != " "){
        cout++;
    }
}
console.log(cout);