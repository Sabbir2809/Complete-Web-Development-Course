/*
যদি আজ বৃষ্টি হয় তাহলে ফুটবল খেলব, না হলে ক্রিকেট খেলব।

    যদি (আজ বৃষ্টি হয়){ //এক্সপ্রেশন
        তাহলে ফুটবল খেলব।
    }
    না হলে {
        ক্রিকেট খেলব।
    }
*/

// const userResponse = prompt('(Is it raining? a) Yes b) No');

// if(userResponse === 'a'){
//     console.log('will play football');
// }
// else if(userResponse === 'b'){
//     console.log('will play cricket');
// }
// else{
//     console.log('Please, select a valid option');
// }

const age = Number(prompt('Student Age: '));
let group = null;

if(age > 14){
    group = 'A';
}
else if(age > 12){
    group = 'B';
}
else if(age > 12){
    group = 'C';
}
else{
    group = 'D'
}
console.log('group: ',group);