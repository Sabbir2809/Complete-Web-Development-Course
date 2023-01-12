const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, Collection, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;
// middleware
app.use(cors());
app.use(express.json());

const uri =
  'mongodb+srv://node-mongo:adYmchbLah3S6B7E@cluster0.an7cx.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    const userCollection = client.db('nodeMongoCrud').collection('users');

    app.get('/users', async (req, res) => {
      const query = {};
      const cursor = userCollection.find(query);
      const users = await cursor.toArray();
      res.send(users);
    });

    app.get('/users/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const user = await userCollection.findOne(query);
      res.send(user);
    });

    // const user = {
    //   name: 'test',
    //   email: 'test@gmail.com',
    // };
    // const result = await userCollection.insertOne(user);
    // console.log(result);
    app.post('/users', async (req, res) => {
      const user = req.body;
      console.log(user);
      const result = await userCollection.insertOne(user);
      res.send(result);
    });

    app.put('/users/:id', async (req, res) => {
      const id = req.params.id;
      const filter = {
        _id: ObjectId(id),
      };
      const user = req.body;
      const option = { upsert: true };
      const updatedUser = {
        $set: {
          name: user.name,
          address: user.address,
          email: user.email,
        },
      };
      // console.log(updatedUser);
      const result = await userCollection.updateOne(filter, updatedUser, option);
      res.send(result);
    });

    // delete operation
    app.delete('/users/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await userCollection.deleteOne(query);
      console.log(result);
      res.send(result);
    });
  } finally {
    console.log('Nice!');
  }
}
run().catch((error) => {
  console.error(error);
});

app.get('/', (req, res) => {
  res.send('Node-Mongo-Server!!!');
});

app.listen(port, () => {
  console.log(`Listening to Port ${port}`);
});
