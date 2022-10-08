const student = {
  name: 'Sabbir Hossain',
  age: 22,
  class: 'Ten',
  marks: {
    math: 60,
    physics: 80,
    chemistry: 70,
  },
};

const marks = student.marks;
const math = student.marks.math;

const chemistry = student['marks']['chemistry'];

const subject = 'physics';
const subjectMarks = student.marks[subject];
// const subjectMarks = student.marks.subject;
console.log(subjectMarks);

const user = {
  id: 1,
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'Sincere@april.biz',
  address: {
    street: 'Kulas Light',
    suite: 'Apt. 556',
    city: 'Gwenborough',
    zipcode: '92998-3874',
    geo: {
      lat: '-37.3159',
      lng: '81.1496',
    },
  },
  phone: '1-770-736-8031 x56442',
  website: 'hildegard.org',
  company: {
    name: 'Romaguera-Crona',
    catchPhrase: 'Multi-layered client-server neural-net',
    bs: 'harness real-time e-markets',
  },
};

const email = user.email;
console.log(email);

const address = user.address;
console.log(address.city);

const lat = user.address.geo.lat;
console.log(lat);

const company = user['company']['name'];
console.log(company);
