console.log("String Line One\nString Line Two");
// console.log(`String Line One
// String Line Two`);

const name = "Ripon Video";
const age = 25;
const job = "Content Creator";
const city = "Netrokona";
let html;

function hello(){
    return "Hello";
}


/*
//without template string(ES5)-Old
html = "<ul>" +
        "<li> Name: "+ name + "</li>" +
        "<li> Name: "+ age + "</li>" +
        "<li> Name: "+ job + "</li>" +
        "<li> Name: "+ city + "</li>" +
        "</ul>";

document.body.innerHTML = html;
*/

//With template String (ES6)
html = `
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li>Likes: ${10+100}K</li>
        <li>Likes: ${hello()}</li>
    </ul>
`
document.body.innerHTML = html;