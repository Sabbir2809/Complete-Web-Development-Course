const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const app = express();
// middleware
app.use(cors());
app.use(express.json());
// port
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

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.an7cx.mongodb.net/?retryWrites=true&w=majority`;
console.log(uri);
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    const userCollection = client.db('simpleNode').collection('users');

    app.get('/users', async (req, res) => {
      const cursor = userCollection.find({});
      const users = await cursor.toArray();
      res.send(users);
    });

    // const result = await userCollection.insertOne(user);
    // console.log(result);
    app.post('/users', async (req, res) => {
      // console.log('Post API Called');
      const user = req.body;
      const result = await userCollection.insertOne(user);
      console.log(result);
      user._id = result.insertedId;
      res.send(user);
    });
  } finally {
  }
}

run().catch((error) => console.error(error));

app.get('/', (req, res) => {
  res.send('Simple Node Server Running');
});

// app.get('/users', (req, res) => {
//   if (req.query.name) {
//     // filter users by query
//     const search = req.query.name;
//     const filtered = users.filter((usr) => usr.name.toLowerCase().indexOf(search) >= 0);
//     res.send(filtered);
//   } else {
//     res.send(users);
//   }
// });

// app.post('/users', (req, res) => {
//   // console.log('Post API Called');
//   const user = req.body;
//   user.id = users.length + 1;
//   users.push(user);
//   console.log(user);
//   res.send(user);
// });

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

/*
  Query: path?name=value&key=value
*/

/*
  1. sign up mongodb atlas
  2. db_user
  3. whitelist your ip address
  4. database > connect > show entire code
  5. npm i mongodb
*/
