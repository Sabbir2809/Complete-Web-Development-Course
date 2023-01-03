const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

const users = [
  {
    id: 1,
    name: 'Sabbir Hossain',
    email: 'sabbir@gmail.com',
  },
  {
    id: 2,
    name: 'Tasin',
    email: 'tasin@gmail.com',
  },
  {
    id: 3,
    name: 'Tahmid',
    email: 'tahmid@gmail.com',
  },
];

app.get('/', (req, res) => {
  res.send('Simple Node Server Running');
});

app.get('/users', (req, res) => {
  res.send(users);
});

app.post('/users', (req, res) => {
  console.log('Post API Called');
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  console.log(user);
  res.send(user);
});

app.listen(port, () => {
  console.log(`Simple Node Server Running on port ${port}`);
});

/*
  POST:
    - Create POST API
    - use fetch with method POST
    - add headers to the fetch: 'content-type': 'application/client'
    - add body to the fetch to send data
    - make sure to use JSON.stringify() to send data
    - use express.json() as meddle ware
*/
